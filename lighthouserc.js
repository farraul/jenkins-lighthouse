module.exports = {
    ci: {
        collect: {
            url: ['https://www.relevo.com/'],
            numberOfRuns: 1,
            settings: {
                onlyCategories: ['performance']
            }
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: `http://localhost:9001`,
            token: 'b580c997-366e-4250-97d6-1c1b163278c8',
        },
    },
}