const testflightUrl = "https://testflight.apple.com/join/REPLACE_ME";

const isIOS = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOS13 = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return iOS || iPadOS13;
};

const getRoute = () => {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path.startsWith("/c/")) {
    const id = path.split("/c/")[1] || "";
    return { name: "compliment", id };
  }
  return { name: "home" };
};

const renderHome = () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">compliment.my</p>
          <h1>Send tiny sparks of kindness.</h1>
          <p class="lead">
            Compliment Jar makes it easy to share thoughtful notes, celebrate milestones, and
            remind your people that they matter.
          </p>
          <div class="cta-row" id="get-app">
            <button class="cta">
              <span class="cta-heart">❤</span>
              Send a Compliment
            </button>
            <span class="cta-note">iOS app coming soon</span>
          </div>
        </div>

        <div class="hero-card">
          <div class="phone">
            <div class="phone-header">
              <span>12:53</span>
              <span class="status-dot"></span>
            </div>
            <div class="phone-body">
              <div class="app-icon">
                <span>❤</span>
              </div>
              <h2>Spread Kindness</h2>
              <p>Send a compliment to brighten someone's day.</p>
              <div class="primary-pill">❤ Send Compliment</div>
              <div class="card-grid">
                <div class="mini-card">
                  <div class="mini-badge">🎁</div>
                  <strong>Sarah Johnson</strong>
                  <span>Birthday coming!</span>
                </div>
                <div class="mini-card">
                  <div class="mini-badge">⏰</div>
                  <strong>Test</strong>
                  <span>Send a compliment</span>
                </div>
              </div>
            </div>
            <div class="phone-footer">
              <div class="tab active">Jar</div>
              <div class="tab">Send</div>
              <div class="tab">Friends</div>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <h3>Save your favorites</h3>
          <p>Keep a private jar of notes you can revisit anytime you need a smile.</p>
        </div>
        <div class="feature">
          <h3>Gentle reminders</h3>
          <p>Set reminders for birthdays, milestones, or when someone needs extra love.</p>
        </div>
        <div class="feature">
          <h3>Impact snapshots</h3>
          <p>Track the ripples you create with quick, delightful stats.</p>
        </div>
      </section>
    </main>
  `;
};

const renderCompliment = (id) => {
  const app = document.getElementById("app");
  const ios = isIOS();
  app.innerHTML = `
    <main>
      <section class="hero redirect">
        <div class="hero-copy">
          <p class="eyebrow">compliment.my</p>
          <h1>One moment…</h1>
          <p class="lead">
            ${ios ? "If you have the app installed, it should open automatically." : "Open this on iOS to use the app."}
          </p>
          <div class="cta-row">
            <a class="cta" href="${testflightUrl}" rel="noopener">
              <span class="cta-heart">❤</span>
              Download on TestFlight
            </a>
            <span class="cta-note">Compliment ID: <strong>${id || "unknown"}</strong></span>
          </div>
        </div>
        <div class="hero-card">
          <div class="card-plain">
            <h2>Thanks for spreading kindness</h2>
            <p>Once the app is installed, opening this link will take you right to the compliment.</p>
            <div class="pill-muted">${window.location.href}</div>
          </div>
        </div>
      </section>
    </main>
  `;
};

const boot = () => {
  const route = getRoute();
  if (route.name === "compliment") {
    renderCompliment(route.id);
  } else {
    renderHome();
  }
};

boot();
