import axios from 'axios'
export default {
  data () {
    return {
      usersData: [
        {
          username: '锤锤',
          email: '39323@qq.com',
          mobile: '13796986399'
        }
      ],
      total: 0,
      input3: ''
    }
  },
  created () {
    this.getUsersData()
  },
  methods: {
    getUsersData (pagenum = 1, query = '') {
      axios
        .get('http://192.168.48.55:8888/api/private/v1/users', {
          params: {
            query,
            pagenum,
            pagesize: 2
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res)
          this.usersData = res.data.data.users
          this.total = res.data.data.total
        })
    },
    currentPageChange (pagenum) {
      this.getUsersData(pagenum, this.input3)
    },
    startSearch () {
      this.getUsersData(1, this.input3)
    },
    open () {}
  }
}
