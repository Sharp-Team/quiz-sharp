# Quiz Sharp - Project PRN292

### Đăng ký:
- Nếu như thành công thì trả về "Register successful".
- Còn lại là hiện lỗi.

```javascript
const signup = await this._userBridge.register("thaycacac", "camlonem", "1.jpg", "hoapnse05740@gmail.com", new Date())
console.log(signup)
```

### Đăng nhập
- Nếu đăng nhập thành công trả về chuỗi "Login successfull"
- Còn lại là hiện lỗi

```javascript
const signin = await this._userBridge.signin("hoapn", "123456");
console.log(signin)
```

### List quiz của tài khoản
- truyền vào username và trang hiện tại
- trả ra một list gồm (id, username, title, term, createddate)

```javascript
const listQuizByUser = await this._setStudyBridge.getListSetStudyByUser("hoapn", 1);)
console.log({listQuizByUser})
```

### List quiz trang chủ
- truyền vào trang hiện tại
- trả ra một list gồm (id, username, title, term, createddate)

```javascript
const listQuiz = await this._setStudyBridge.getListSetStudy(1)
console.log({listQuiz})
```

### Lấy ra tổng số trang của trang chủ để phân trang
```javascript
const totalPage = await this._setStudyBridge.getTotalPageSetStudy()
console.log({totalPage})
```


### Lấy ra tổng số trang của trang user để phân trang
```javascript
const totalPage = await this._setStudyBridge.getTotalPageSetStudyByUser("hoapn")
console.log({totalPage})
```

### Lấy ra tất cả các quiz trong một set study
- Truyền vào id của set study
```javascript
const quiz = await this._quizBridge.getListQuizByID(1)
console.log({ quiz })
```

### Các hàm còn lại
```javascript
deleteSetStudy(id: number): string
editSetStudy(id: number, title: string, updatedDate: any, listQuiz: any): string
addSetStudy(username: string, title: string, createdDate: any, listQuiz: any): string

editQuiz(id: number, term: string, definition: string): string
deleteQuiz(id: number): string
```
