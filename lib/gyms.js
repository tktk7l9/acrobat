import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const gymsDirectory = path.join(process.cwd(), 'gyms')

export function getSortedGymsData() {
  // Get file names under /gyms
  const fileNames = fs.readdirSync(gymsDirectory)
  const allGymsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(gymsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the gym metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort gyms by date
  return allGymsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllGymIds() {
  const fileNames = fs.readdirSync(gymsDirectory)

  // Returns an array that looks like this:
  // [
  //  {
  //    params: {
  //      id: 'ssg-ssr'
  //    }
  //   },
  //   {
  //      params: {
  //        id: 'pre-rendering'
  //      }
  //    }
  //  }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getGymsData(id) {
  const fullPath = path.join(gymsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Use gray-matter to parse the gym metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}