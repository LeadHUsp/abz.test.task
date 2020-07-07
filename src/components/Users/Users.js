import React from "react";
import { getUsers } from "../api/api";
import s from "./Users.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import Button from "../button/Button";
import Form from "../Form/Form";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      users: [],
      page: 1,
      total_pages: null,
    };
  }
  async getData(page = 1) {
    try {
      let res = await getUsers(page);
      this.setState((prevState) => ({
        users: prevState.users.concat(res.data.users),
        page: res.data.page,
        total_pages: res.data.total_pages,
      }));
    } catch (err) {
      console.log(err);
    }
  }
  async getDataAfterSignUp(page = 1) {
    try {
      let res = await getUsers(page);
      this.setState({
        users: res.data.users,
        page: res.data.page,
        total_pages: res.data.total_pages,
      });
    } catch (err) {
      console.log(err);
    }
  }

  showMore() {
    let nextpage = this.state.page * 1 + 1;
    this.getData(nextpage);
  }
  renderUsers() {
    if (this.state.users.length > 1) {
      let render = this.state.users.map((user) => {
        return <UserInfo key={user.id} user={user} />;
      });
      return render;
    }
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <section className={s.users_wrapper}>
          <div className="container px-0">
            <h1>Our cheerful users</h1>
            <p>Attention! Sorting users by registration date</p>
            <div className={s.users_info}>{this.renderUsers()}</div>
          </div>
          {this.state.page !== this.state.total_pages && (
            <div className={s.show_more}>
              <Button
                onClickFunc={this.showMore.bind(this)}
                text={"Show more"}
              />
            </div>
          )}
        </section>
        <Form updateAfterSignUp={this.getDataAfterSignUp.bind(this)} />
      </>
    );
  }
}
export default Users;
