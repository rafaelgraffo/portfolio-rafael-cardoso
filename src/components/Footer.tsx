import { useI18n } from '../i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{t.footer.rights}</span>
        <span className="footer-stack">{t.footer.stack}</span>
        <a className="back-to-top" href="#top">
          {t.a11y.backToTop} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
