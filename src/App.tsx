import { defineComponent, reactive, toRefs } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalHeader from "./components/globalHeader/index";
import DropDown from "./components/dropDown";
import DropDownItem from "./components/dropDownItem";
export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    DropDown,
    DropDownItem
  },
  setup() {
    const state = reactive({
      opensMap: [false, false, false]
    });
    const toggleOpen = (index: number) => {
      state.opensMap[index] = !state.opensMap[index];
    };
    return {
      ...toRefs(state),
      toggleOpen
    };
  },
  render() {
    return (
      <div>
        <global-header title="Vue3组件库" theme="primary"></global-header>
        <div class="home-page container-md">
          <h2 class="font-weight-bold text-center mb-4 mt-4">组件库演示实例</h2>
          <div class="row">
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(0);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[0] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">Dropdown</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(1);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[1] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <drop-down title="选择城市">
                          <drop-down-item>
                            <a href="#" class="dropdown-item">
                              北京
                            </a>
                          </drop-down-item>
                          <drop-down-item>
                            <a href="#" class="dropdown-item">
                              上海
                            </a>
                          </drop-down-item>
                          <drop-down-item>
                            <a href="#" class="dropdown-item">
                              深圳
                            </a>
                          </drop-down-item>
                          <drop-down-item disabled>
                            <a href="#" class="dropdown-item">
                              广州
                            </a>
                          </drop-down-item>
                        </drop-down>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(2);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[2] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(0);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[0] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(1);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[1] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(2);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[2] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(0);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[0] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(1);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[1] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                  <img src="http://showcase.vikingship.xyz/img/Dropdown.266eed66.svg" />
                  <p class="card-title text-truncate mt-2">GlobalHeader</p>
                  <p>
                    <button
                      class="btn btn-outline-primary"
                      onClick={() => {
                        this.toggleOpen(2);
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      查看demo
                    </button>
                  </p>
                  {this.opensMap[2] && (
                    <div
                      class="collapse"
                      id="collapseExample"
                      style={{ display: "block" }}
                    >
                      <div class="card card-body">
                        <global-header
                          title="primary"
                          theme="primary"
                        ></global-header>
                        <global-header
                          title="secondary"
                          theme="secondary"
                        ></global-header>
                        <global-header
                          title="success"
                          theme="success"
                        ></global-header>
                        <global-header
                          title="danger"
                          theme="danger"
                        ></global-header>
                        <global-header
                          title="warning"
                          theme="warning"
                        ></global-header>
                        <global-header
                          title="info"
                          theme="info"
                        ></global-header>
                        <global-header
                          title="dark"
                          theme="dark"
                        ></global-header>
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">属性或事件</th>
                              <th scope="col">类型</th>
                              <th scope="col">默认</th>
                              <th scope="col">说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">title</th>
                              <td>string</td>
                              <td>标题</td>
                              <td>标题</td>
                            </tr>
                            <tr>
                              <th scope="row">theme</th>
                              <td>string</td>
                              <td>primary</td>
                              <td>主题</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
