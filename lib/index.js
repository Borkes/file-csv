
const fs = require('fs');
const _ = require('lodash')
const iconv = require('iconv-lite');

class file_csv {
    constructor(data, csvPath) {
        this.data = data;
        this.path = csvPath;
        this.check = file_csv.checkType();
    }

    //判断类型方法
    static checkType() {
        let checkType = {}
        let types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');
        function type() {
            return Object.prototype.toString.call(this).slice(8, -1);
        }

        for (let i = types.length; i--;) {
            checkType['is' + types[i]] = function (elem) {
                return type.call(elem) === types[i];
            };
        }
        return checkType;
    }

    getCsv() {
        let ws = fs.createWriteStream(this.path);
        let content = '';
        let data = this.data;
        if (this.check.isArray(data)) { //数组的话直接处理
            for (let i = 0; i < data.length; i++) {
                let obj = data[i];
                for (let key in obj) {
                    content += obj[key];
                    content += ',';
                }
                content += '\t\n';
            }
            // //需要转换字符集
            // var buffer = new Buffer(content);
            // var iconv = require('iconv-lite');
            // var str = iconv.encode(buffer, 'gb2312');
            ws.write(content);
        } else if (this.check.isString(this.data)) { //字符串需要读取文件
            let _data = [];
            let size = 0;
            let str = '';
            let rs = fs.createReadStream(this.data); //通过路径读取数据
            rs.on('data', (trunk) => {
                _data.push(trunk);
                size += trunk.length;
            })
            rs.on('end', () => {
                let buf = Buffer.concat(_data, size);
                str = iconv.decode(buf, 'utf8');
                if (this.check.isString(str)) {
                    try {
                        _data = JSON.parse(str);
                    } catch (e) {
                        throw new Error('文件格式错误');
                        return;
                    }
                }
                for (let i = 0; i < _data.length; i++) {
                    let obj = _data[i];
                    for (let key in obj) {
                        content += obj[key];
                        content += ',';
                    }
                    content += '\t\n';
                }
                ws.write(content);
            })
        }
    }
}

module.exports = file_csv;

