export async function onRequest(context) {
    const url = new URL(context.request.url);

    // Fetch README from GitHub
    const readmeUrl = 'https://raw.githubusercontent.com/mike-vincent/mike-vincent/main/README.md';
    const readmeResponse = await fetch(readmeUrl, {
        cf: { cacheTtl: 300 } // Cache for 5 minutes
    });

    if (!readmeResponse.ok) {
        return Response.redirect(url.origin + '/', 302);
    }

    const markdown = await readmeResponse.text();
    const html = renderBioPage(markdown);

    return new Response(html, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=300'
        }
    });
}

function renderBioPage(markdown) {
    // Parse markdown to HTML (simple conversion)
    let content = markdown
        // Remove the "# Hi, I'm Mike" header
        .replace(/^# Hi, I'm Mike\n+/, '')
        // Convert headers
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        // Convert blockquotes
        .replace(/^> (.+)$/gm, '<p class="bio-tagline">$1</p>')
        // Convert bold with emoji location line
        .replace(/📍 \*\*(.+?)\*\* \| 📻 \*\*(.+?)\*\* \| ⚙️ \*\*(.+?)\*\*/g,
            '<p class="bio-location">$1 · $2 · $3</p>')
        // Convert links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        // Convert bold
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        // Convert list items with emoji
        .replace(/^- (🐍|⏱️|🛒|📻|🎬|🌐|🕰️) (.+)$/gm, '<li><span class="emoji">$1</span> $2</li>')
        // Convert plain list items
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        // Wrap consecutive li elements in ul
        .replace(/(<li>[\s\S]*?<\/li>)(?=\s*<li>)/g, '$1')
        // Add paragraph breaks
        .replace(/\n\n/g, '</p><p>')
        // Clean up empty paragraphs
        .replace(/<p>\s*<\/p>/g, '')
        .replace(/<p>\s*<h/g, '<h')
        .replace(/<\/h(\d)>\s*<\/p>/g, '</h$1>');

    // Wrap list items in ul tags
    content = content.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul class="bio-list">$&</ul>');

    return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="/icon.png" />
    <link rel="icon" href="/icon.png" />
    <link rel="stylesheet" href="https://www.apple.com/wss/fonts?families=SF+Pro,v1|SF+Pro+Icons,v1" type="text/css" media="all">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>About - Mike Vincent</title>
    <meta name="description" content="About Mike Vincent - Software Engineer" />
    <style>
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; }
        .theme-dark { background: #000; color: #fff; }
        .theme-light { background: #fff; color: #000; }
        .section-content { max-width: 980px; margin: 0 auto; padding: 0 22px; }
        .row { display: flex; flex-wrap: wrap; }
        .column { width: 100%; }
        .large-10 { max-width: 83.333%; }
        .large-centered { margin-left: auto; margin-right: auto; }
        @media (max-width: 734px) { .large-10 { max-width: 100%; } }
        .site-header-wrapper { position: sticky; top: 0; z-index: 100; }
        .theme-dark .site-header-wrapper { background: #000; }
        .theme-light .site-header-wrapper { background: #fff; }
        .site-header {
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .site-header-left a {
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
        }
        .theme-dark .site-header-left a { color: #fff; }
        .theme-light .site-header-left a { color: #000; }
        .site-header-left {
            display: flex;
            align-items: center;
        }
        .site-header-right {
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .site-header-right a {
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
        }
        .theme-dark .site-header-right a { color: rgba(255, 255, 255, 0.8); }
        .theme-light .site-header-right a { color: rgba(0, 0, 0, 0.8); }
        .site-header-right a:hover { text-decoration: underline; }
        .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .theme-dark .theme-toggle { color: rgba(255, 255, 255, 0.8); }
        .theme-light .theme-toggle { color: rgba(0, 0, 0, 0.8); }
        .theme-toggle:hover { text-decoration: underline; }
        .theme-toggle .material-symbols-outlined { font-size: 18px; }
        .theme-toggle .chevrons {
            display: flex;
            flex-direction: column;
            line-height: 0;
        }
        .theme-toggle .chevrons .material-symbols-outlined { font-size: 12px; }
        .site-footer {
            padding: 24px 0;
            font-size: 12px;
            border-top: 1px solid rgba(128, 128, 128, 0.2);
        }
        .theme-dark .site-footer { color: rgba(255, 255, 255, 0.5); }
        .theme-light .site-footer { color: rgba(0, 0, 0, 0.5); }
        .section { padding-top: 0 !important; padding-bottom: 0 !important; }
        .bio-content {
        }
        .bio-location {
            font-size: 14px;
            margin: 0 0 8px;
        }
        .theme-dark .bio-location { color: rgba(255, 255, 255, 0.6); }
        .theme-light .bio-location { color: rgba(0, 0, 0, 0.6); }
        .bio-tagline {
            font-size: 18px;
            font-weight: 500;
            margin: 0 0 24px;
        }
        .theme-dark .bio-tagline { color: #fff; }
        .theme-light .bio-tagline { color: #000; }
        .bio-content h2 {
            font-size: 18px;
            font-weight: 600;
            margin: 24px 0 12px;
        }
        .theme-dark .bio-content h2 { color: #fff; }
        .theme-light .bio-content h2 { color: #000; }
        .bio-content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 0 0 16px;
        }
        .theme-dark .bio-content p { color: rgba(255, 255, 255, 0.8); }
        .theme-light .bio-content p { color: rgba(0, 0, 0, 0.8); }
        .bio-list {
            margin: 0 0 16px;
            padding-left: 0;
            list-style: none;
        }
        .bio-list li {
            font-size: 15px;
            line-height: 1.8;
            margin-bottom: 4px;
        }
        .theme-dark .bio-list li { color: rgba(255, 255, 255, 0.8); }
        .theme-light .bio-list li { color: rgba(0, 0, 0, 0.8); }
        .bio-list .emoji {
            margin-right: 8px;
        }
        .bio-content a {
            color: #007AFF;
            text-decoration: none;
        }
        .bio-content a:hover { text-decoration: underline; }
        @media (max-width: 500px) {
            .bio-content { padding: 0 0 24px; }
            .site-header { padding: 0 16px; }
            .site-header-right { gap: 16px; }
        }
    </style>
</head>
<body id="overview">
    <script>
        let manualTheme = localStorage.getItem('theme');
        function setTheme() {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDark = manualTheme ? manualTheme === 'dark' : prefersDark;
            document.body.classList.toggle('theme-dark', isDark);
            document.body.classList.toggle('theme-light', !isDark);
            const btn = document.querySelector('.theme-toggle');
            if (btn) btn.innerHTML = isDark
                ? '<span class="material-symbols-outlined">light_mode</span>Light<span class="chevrons"><span class="material-symbols-outlined">expand_less</span><span class="material-symbols-outlined">expand_more</span></span>'
                : '<span class="material-symbols-outlined">dark_mode</span>Dark<span class="chevrons"><span class="material-symbols-outlined">expand_less</span><span class="material-symbols-outlined">expand_more</span></span>';
        }
        function toggleTheme() {
            const isDark = document.body.classList.contains('theme-dark');
            manualTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', manualTheme);
            setTheme();
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (!manualTheme) setTheme();
        });
        document.addEventListener('DOMContentLoaded', setTheme);
        setTheme();
    </script>

    <div class="site-header-wrapper">
        <div class="section-content">
            <div class="row">
                <div class="column large-centered large-10 small-12">
                    <header class="site-header">
                        <div class="site-header-left">
                            <a href="/">Mike Vincent</a>
                        </div>
                        <nav class="site-header-right">
                            <a href="/">Posts</a>
                            <a href="/about">Bio</a>
                            <a href="/resume">Resume</a>
                            <button class="theme-toggle" onclick="toggleTheme()">Light</button>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
    </div>

    <main id="main" class="main" role="main">
        <section class="section">
            <div class="section-content">
                <div class="row">
                    <div class="column large-centered large-10 small-12">
                        <div class="bio-content">
                            ${content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div class="site-footer-wrapper">
        <div class="section-content">
            <div class="row">
                <div class="column large-centered large-10 small-12">
                    <footer class="site-footer">
                        Copyright &copy; 2026 Mike Vincent. All rights reserved.
                    </footer>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}
