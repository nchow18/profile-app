class AuthService {

  redirectPage(page) {
    const setPage = localStorage.setItem('current_page', page);
    return setPage
  }

  getCurrentPage() {
    const page = localStorage.getItem('current_page');
    return window.location.href = `/${page}`;
  }

  getPageType() {
    return localStorage.getItem('current_page');
  }

  setProject(project) {
    return localStorage.setItem('current_project', project)
  }

  getProject() {
    return localStorage.getItem('current_project');
  }

}

export default new AuthService();