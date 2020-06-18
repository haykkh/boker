const Hubdb = require('hubdb')

const initHubdb = () =>
  Hubdb({
    token: process.env.GH_TOKEN,
    username: process.env.GH_USERNAME,
    repo: process.env.GH_DB_REPO,
    branch: process.env.GH_DB_REPO_BRANCH
  })

const fetchHubData = (db, file) =>
  new Promise((resolve, reject) => db.get(file, (_err, res) => resolve(res)))

export const FetchDb = (dispatch, options) => {
  dispatch(options.ongetting, true)
  const db = initHubdb()

  const dbFile = process.env.DB_FILE

  const hubData = fetchHubData(db, dbFile)

  hubData.then(hubres => {
    console.log(hubres)
    dispatch(options.onfinish, { db: hubres, haveDb: true})
    dispatch(options.ongetting, false)
  })
}
