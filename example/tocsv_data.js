const csv = require('../index');

let data = [
    { "595a1d3330aa9d0ee609daec": 20496 },
    { "595a1d3230aa9d0ee609dae8": 16826 },
    { "595a1d3530aa9d0ee609dafc": 21604 },
    { "595a1d3430aa9d0ee609daf8": 21511 },
    { "59507c7553618b394bdcc766": 11012 },
    { "58da623af12ccb105181cf46": 8695 },
    { "595a1d3230aa9d0ee609dae4": 11920 },
    { "595a1d3430aa9d0ee609daf4": 21287 },
    { "595a1d3330aa9d0ee609daf0": 20796 },
    { "595a1d3530aa9d0ee609db00": 21590 },
    { "59fa97cb1ea93c211ac145b9": 975 },
    { "590c43c7b1628514ae370033": 4798 },
    { "59fadc86ffcc6529579a2e38": 3878 },
    { "595a168330aa9d0ee609dac4": 1196 },
    { "595a168530aa9d0ee609dad4": 1815 },
    { "595a168330aa9d0ee609dac0": 1417 },
    { "595a168230aa9d0ee609dabc": 1246 },
    { "595a1d3130aa9d0ee609dadc": 5588 }
]
let f = csv(data, '/Users/borkes/workSpace/myExample/data1.csv')
f.getCsv()