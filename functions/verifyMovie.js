const { By } = require('selenium-webdriver')

const verifyMovie = async (driver) => {
    const movie = 'Back to the Future'

    await driver.findElement(By.xpath('//input')).sendKeys(movie)

    await driver.findElement(By.xpath('//button')).click()

    const movieDisplay = await driver.findElement(By.xpath('//li/span')).getText()
    
    expect(movieDisplay).toEqual(movie)
}

module.exports = {
    verifyMovie
}