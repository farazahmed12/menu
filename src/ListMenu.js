import React from "react";

const ListMenu = () => {
  return (
    <ul class="list-group">
      <div
        class="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          class="nav-link active mb-3 py-2 green h5 text-center"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-flavor1"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          1st Flavor
        </a>
        <a
          class="nav-link mb-3 py-2 green h5 text-center"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-flavor2"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          2nd Flavor
        </a>
        <a
          class="nav-link mb-3 py-2 green h5  text-center"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-flavor3"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          3rd Flavor
        </a>
        <a
          class="nav-link mb-3 py-2 green h5 text-center"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-crust"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Crust
        </a>
        <a
          class="nav-link mb-3 py-2 green h5 text-center"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-topping"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Topping
        </a>
        <a
          class="nav-link mb-3 py-2 green h5 text-center"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-extra"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Add Extra
        </a>
      </div>
    </ul>
  );
};

export default ListMenu;
