const { By } = require('selenium-webdriver')

const deleteMovie = async (driver) => {

    const movie = "Back to the Future"

    await driver.findElement(By.xpath('//input')).sendKeys(movie)

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/button')).click()

    const movieDisplay = await driver.findElements(By.xpath('//li'))

    expect(movieDisplay).toHaveLength(0)

}

module.exports = {
    deleteMovie
}