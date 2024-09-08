const fs = require('fs').promises
const path = require('path')

// Define constants for the components directory and Storybook import
const COMPONENTS_DIR = 'src/shared/components/ui/'

/**
 * Creates a directory at the specified path if it does not already exist.
 * @param {string} dirPath The path to the directory to create
 */
async function createDirectory(dirPath) {
  try {
    // Attempt to create the directory
    await fs.mkdir(dirPath)
  } catch (error) {
    // If the directory already exists, ignore the error
    if (error.code !== 'EEXIST') {
      throw error
    }
  }
}

/**
 * Writes the specified content to a file at the specified path.
 * @param {string} filePath The path to the file to write to
 * @param {string} content The content to write to the file
 */
async function writeFile(filePath, content) {
  // Write the content to the file
  await fs.writeFile(filePath, content)
}

/**
 * Creates a new component with the specified name.
 * @param {string} name The name of the component to create
 */
async function createComponent(name) {
  // Capitalize the first letter of the component name
  const componentName = capitalizeFirstLetter(name)
  // Construct the paths to the component files
  const dirPath = path.join(COMPONENTS_DIR, name)
  const componentPath = path.join(dirPath, `${componentName}.js`)
  const storyPath = path.join(dirPath, `${componentName}.stories.js`)
  const indexPath = path.join(dirPath, 'index.js')
  // Create the component directory if it does not already exist
  await createDirectory(dirPath)
  // Define the content for the component files
  const componentContent = 'import * as React from \'react\''
  const storyContent = 'import { Meta, StoryObj } from \'@storybook/react\''
  const indexContent = `export * from './${componentName}'`

  // Write the content to the component files
  await writeFile(componentPath, componentContent)
  await writeFile(storyPath, storyContent)
  await writeFile(indexPath, indexContent)
}

/**
 * Updates the main index file to include the specified component.
 * @param {string} componentName The name of the component to add to the index
 */
async function updateMainIndex(componentName) {
  // Construct the path to the main index file
  const mainIndexPath = 'src/shared/components/index.ts'
  // Read the contents of the main index file
  const mainIndexContent = await fs.readFile(mainIndexPath, 'utf8')
  // Define the line to add to the index file
  const lineToAdd = `module.exports = require("./ui/${componentName}");`
  // Check if the line is already in the index file
  if (mainIndexContent.includes(lineToAdd)) {
    console.log('Index already contains the component')
    return
  }
  // Add the line to the index file
  const mainIndexContentArr = mainIndexContent.split('\n')
  const importIndex = mainIndexContentArr.findIndex(line => line.includes('module.exports'))
  mainIndexContentArr.splice(importIndex, 0, lineToAdd)
  await fs.writeFile(mainIndexPath, mainIndexContentArr.join('\n'))
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} string The string to capitalize
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get the component name from the command line
const name = process.argv[2]
// Check if a component name was provided
if (!name) {
  console.log('Please provide a name for the component')
  return
}

createComponent(name).then(() => updateMainIndex(name))