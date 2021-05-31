class AuthService {

  redirectPage(page) {
    const setPage = localStorage.setItem('current_page', page);
    return setPage
  }

  getCurrentPage() {
    return localStorage.getItem('current_page');
  }

}

export default new AuthService();