const fs = require('fs')

function createComponent(name) {
  const componentName = capitalizeFirstLetter(name)

  const dirPath = `src/shared/components/ui/${name}`
  const path = `${dirPath}/${componentName}`
  const componentPath = `${path}.tsx`
  const storyPath = `${path}.stories.tsx`
  const indexPath = `${dirPath}/index.ts`

  const componentContent = 'import * as React from \'react\''
  const storyContent = 'import { Meta, StoryObj } from \'@storybook/react\''
  const indexContent = `export * from './${componentName}'`


  // Check if the component already exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  } else {
    console.log('Component already exists')
    return
  }

  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(storyPath, storyContent)
  fs.writeFileSync(indexPath, indexContent)
}

function updateMainIndex(componentName) {
  const mainIndexPath = 'src/shared/components/index.ts'
  const mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8')
  const lineToAdd = `export * from './ui/${componentName}'`

  // Check if the component is already in the index
  if (mainIndexContent.includes(lineToAdd)) {
    console.log('Index already contains the component')
    return
  }
  const mainIndexContentArr = mainIndexContent.split('\n')

  // Add the component to the index
  const importIndex = mainIndexContentArr.findIndex(line => line.includes('export * from'))
  mainIndexContentArr.splice(importIndex, 0, lineToAdd)
  fs.writeFileSync(mainIndexPath, mainIndexContentArr.join('\n'))
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get the component name from the command line
const name = process.argv[2]
if (!name) {
  console.log('Please provide a name for the component')
  return
}

createComponent(name)
updateMainIndex(name)