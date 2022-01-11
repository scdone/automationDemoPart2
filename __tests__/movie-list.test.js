const { addMovie } = require('../functions/addMovie')
const { verifyMovie } = require("../functions/verifyMovie") 
const { deleteMovie } = require("../functions/deleteMovie")

const { Builder, Capabilities } = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('Movie is added to the list', async () => {
    await addMovie(driver)
    await driver.sleep(5000)
})

test('Movie displayed matches text entered', async () => {
    await verifyMovie(driver)
})

test('Movie should be deleted', async () => {
    await deleteMovie(driver)
})