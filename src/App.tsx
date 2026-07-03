import './App.css'
import sol from './assets/solaris.png'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <img id="headerImage" src={sol} alt="Icon Of Fluffy Dragon Sol"/>
        </div>
        <div>
          <h1>Solaris Verill</h1>
          <p>
            Welcome to my little corner of the Interwebs
          </p>
        </div>
      </section>

      <section id="socials">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Socials</h2>
          <ul>
            <li>
              <a href="https://bsky.app/profile/solarisverill.bsky.social" target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
            <li>
              <a href="https://pawb.fun/@Solaris_Verill" target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                  <use href="/icons.svg#mastodon-icon"></use>
                </svg>
                Mastodon
              </a>
            </li>
            <li>
              <a href="mailto:solarisverill@soldragon.net" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#mail-icon"></use>
                </svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/Solaris-Verill" target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                @solarisverill
              </a>
            </li>
            <li>
              <a href="https://x.com/solaris_verill" target="_blank">
                <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
