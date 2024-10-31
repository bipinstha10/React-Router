
function GithubInfo() {
    const githubInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/bipinstha10')
        const data = await response.json()
        return data
      }
  return githubInfoLoader()
}

export default GithubInfo