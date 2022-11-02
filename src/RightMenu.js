import React from "react";

import Flavor1 from "./components/Flavor1";
import Flavor2 from "./components/Flavor2";
import Flavor3 from "./components/Flavor3";
import Crust from "./components/Crust";
import Topping from "./components/Topping";
import Extra from "./components/Extra";

const RightMenu = () => {
  return (
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-flavor1"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <Flavor1 />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-flavor2"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        <Flavor2 />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-flavor3"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
      >
        <Flavor3 />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-crust"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        <Crust />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-topping"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        <Topping />
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-extra"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
      >
        <Extra />
      </div>
    </div>
  );
};

export default RightMenu;
