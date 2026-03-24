import { useEffect, useMemo, useState } from 'react'
import { webdevCategory } from './data/webdevData'
import { imCategory } from './data/imData'
import { networkingCategory } from './data/networkingData'

const reviewerCategories = [webdevCategory, imCategory, networkingCategory]

const themes = [
  { id: 'midnight', label: 'Midnight' },
  { id: 'light', label: 'Light' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'forest', label: 'Forest' },
  { id: 'rose-noir', label: 'Rose Noir' },
]

function getLangClass(lang) {
  const map = {
    GIT: 'lang--git',
    HTML: 'lang--html',
    CSS: 'lang--css',
    JS: 'lang--js',
    SQL: 'lang--sql',
    REACT: 'lang--js',
    JSX: 'lang--js',
    CLI: 'lang--default',
    TXT: 'lang--default',
  }

  return map[lang] || 'lang--default'
}

function Sidebar({
  categories,
  activeCategoryId,
  activeModuleId,
  onSelectCategory,
  onSelectModule,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      <button
        className={`sidebar-toggle ${sidebarOpen ? 'sidebar-toggle--open' : ''}`}
        onClick={() => setSidebarOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__head">
          <p className="sidebar__tag">{'// Reviewer Menu'}</p>
          <h2 className="sidebar__title">Personal Reviewer</h2>
          <p className="sidebar__sub">Made by ThN.</p>
        </div>

        <div className="sidebar__groups">
          {categories.map((category) => {
            const isCategoryActive = activeCategoryId === category.id

            return (
              <div className="sidebar-group" key={category.id}>
                <button
                  className={`sidebar-group__category ${isCategoryActive ? 'sidebar-group__category--active' : ''}`}
                  style={{ '--c': category.accentColor, '--r': category.accentRgb }}
                  onClick={() => onSelectCategory(category.id)}
                >
                  <span className="sidebar-group__category-name">{category.label}</span>
                  <span className="sidebar-group__category-desc">{category.description}</span>
                </button>

                {isCategoryActive && (
                  <div className="sidebar-group__modules">
                    {category.modules.map((module) => (
                      <button
                        key={module.id}
                        className={`sidebar-module ${
                          activeModuleId === module.id ? 'sidebar-module--active' : ''
                        }`}
                        style={{ '--c': module.accentColor, '--r': module.accentRgb }}
                        onClick={() => onSelectModule(category.id, module.id)}
                      >
                        <span className="sidebar-module__num">{module.num}</span>
                        <span className="sidebar-module__title">{module.shortTitle}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </aside>

      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
    </>
  )
}

function Header({ category, module, theme, setTheme, themes }) {
  return (
    <header className="topbar">
      <div className="topbar__content">
        <div>
          <p className="topbar__tag">{category.label}</p>
          <h1 className="topbar__title">{module.title}</h1>
        </div>

        <div className="topbar__actions">
          <select
            className="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            aria-label="Select theme"
          >
            {themes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>

          <div
            className="topbar__badge"
            style={{ '--c': module.accentColor, '--r': module.accentRgb }}
          >
            {module.num}
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero({ category, module, onScrollToContent }) {
  return (
    <section className="hero">
      <p className="hero__mini">{'// Organized Reviewer'}</p>
      <h2 className="hero__heading">
        {category.label}
        <br />
        <span className="hero__gradient">{module.shortTitle}</span>
      </h2>
      <p className="hero__text">
        Browse terms, definitions, examples, and best practices in one organized reviewer layout.
      </p>

      <div className="hero__meta">
        <span className="hero-chip" style={{ '--c': module.accentColor, '--r': module.accentRgb }}>
          {module.num}
        </span>
        <span className="hero-chip" style={{ '--c': category.accentColor, '--r': category.accentRgb }}>
          {category.label}
        </span>
      </div>

    </section>
  )
}

function TermCard({ item, accentColor }) {
  return (
    <article className="term-card" style={{ '--c': accentColor }}>
      <div className="term-card__name">{item.term}</div>
      <p className="term-card__def">{item.def}</p>
    </article>
  )
}

function CodeBlock({ example }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__meta">
          <span className={`code-lang ${getLangClass(example.lang)}`}>{example.lang}</span>
          <span className="code-block__desc">{example.desc}</span>
        </div>

        <button className={`copy-btn ${copied ? 'copy-btn--done' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      <pre className="code-block__body">
        <code>{example.code}</code>
      </pre>
    </div>
  )
}

function ReviewerSection({ title, children }) {
  return (
    <section className="review-section">
      <div className="section-label">{title}</div>
      {children}
    </section>
  )
}

function MainReviewer({ module }) {
  return (
    <main className="content" id="reviewer-content">
      <div className="module-head" style={{ '--c': module.accentColor, '--r': module.accentRgb }}>
        <span className="module-head__badge">{module.num}</span>
        <h3 className="module-head__title">{module.title}</h3>
      </div>

      <ReviewerSection title="Terms & Definitions">
        <div className="terms-grid">
          {module.terms.map((item, index) => (
            <TermCard key={`${item.term}-${index}`} item={item} accentColor={module.accentColor} />
          ))}
        </div>
      </ReviewerSection>

      <ReviewerSection title="Code Examples">
        <div className="code-list">
          {module.codeExamples.map((example, index) => (
            <CodeBlock key={`${example.desc}-${index}`} example={example} />
          ))}
        </div>
      </ReviewerSection>

      <ReviewerSection title="Best Practices">
        <ul className="bp-list">
          {module.bestPractices.map((bp, index) => (
            <li key={`${bp}-${index}`} className="bp-item">
              {bp}
            </li>
          ))}
        </ul>
      </ReviewerSection>
    </main>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`back-top ${visible ? 'back-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setWidth(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="progress-bar" style={{ width: `${width}%` }} />
}

export default function App() {
  const categories = reviewerCategories

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id)
  const [activeModuleId, setActiveModuleId] = useState(categories[0].modules[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('reviewer-theme') || 'midnight'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('reviewer-theme', theme)
  }, [theme])

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) || categories[0],
    [activeCategoryId, categories]
  )

  const activeModule = useMemo(
    () =>
      activeCategory.modules.find((module) => module.id === activeModuleId) ||
      activeCategory.modules[0],
    [activeCategory, activeModuleId]
  )

  const handleSelectCategory = (categoryId) => {
    setActiveCategoryId((prev) => (prev === categoryId ? prev : categoryId))
  }

  const handleSelectModule = (categoryId, moduleId) => {
    setActiveCategoryId(categoryId)
    setActiveModuleId(moduleId)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContent = () => {
    const el = document.getElementById('reviewer-content')
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <ProgressBar />

      <Sidebar
        categories={categories}
        activeCategoryId={activeCategoryId}
        activeModuleId={activeModuleId}
        onSelectCategory={handleSelectCategory}
        onSelectModule={handleSelectModule}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="page-shell">
        <Header
          category={activeCategory}
          module={activeModule}
          theme={theme}
          setTheme={setTheme}
          themes={themes}
        />
        <Hero category={activeCategory} module={activeModule} onScrollToContent={scrollToContent} />
        <MainReviewer module={activeModule} />

        <footer className="footer">
          <p>{activeCategory.label}</p>
          <p className="footer__sub">{activeModule.title}</p>
        </footer>
      </div>

      <BackToTop />
    </div>
  )
}