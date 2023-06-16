import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Kita bisa menginisialisasi komponen lain jika diperlukan
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/admin/create_article'] || routes['/admin/login']; // Menggunakan halaman default jika rute tidak ditemukan
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
