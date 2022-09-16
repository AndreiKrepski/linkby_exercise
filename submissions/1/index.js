
main()

function getProjectItem(projects) {
    let rand = Math.random()
    let curProb = 0
    for (let i = 0; i < projects.length; i++) {
        let prob = projects[i].probability
        if (rand >= curProb && rand < curProb + prob) return projects[i]
        else curProb += prob
    }
}

function main() {
    const projects = [
        { id: 1, name: 'Option 1', probability: 0.3 },
        { id: 2, name: 'Option 2', probability: 0.5 },
        { id: 3, name: 'Option 3', probability: 0.15 },
        { id: 4, name: 'Option 4', probability: 0.05 }
    ]
    const totalTimeRun = new Map()
    for (let i = 1; i <= 500; i++) {
        let pItem = getProjectItem(projects)
        console.log(pItem.name)
        if (!totalTimeRun.get(pItem.id)) {
            totalTimeRun.set(pItem.id, 1)
        } else {
            totalTimeRun.set(pItem.id, totalTimeRun.get(pItem.id) + 1)
        }
    }

    let summary = ''
    totalTimeRun.forEach((value, key) => {
        summary += `ID ${key} = ${value} `
    })
    console.log(summary)
}
