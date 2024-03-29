<template>
  <header>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center px-2 lg:px-0">
            <router-link to="/" class="flex-shrink-0">
              <img class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              <img class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
            </router-link>
            <div class="hidden lg:block lg:ml-6">
              <div class="flex space-x-4">
                <router-link :to="link.path" v-slot="{ href, navigate, isActive }" v-for="link in nav" :key="link.id">
                  <a :href="href" @click="navigate" class="px-3 py-2 rounded-md text-sm font-medium" :class="[isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">{{link.name}}</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Пошук</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="search" name="search"
                  class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                  placeholder="Пошук" type="search" />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Відкрити головне меню</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative flex-shrink-0" v-if="login">
                <div>
                  <MenuButton
                    class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                      Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                      out</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
              <div class="hidden lg:flex lg:items-center lg:gap-4" v-else>
                <router-link to="/login" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 focus:ring-offset-gray-800">Вхід</router-link>
                <router-link to="/register" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800">Реєстрація</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link :to="link.path" v-slot="{ href, navigate, isActive }" v-for="link in nav" :key="link.id">
            <DisclosureButton as="a" :href="href" @click="navigate" class="block px-3 py-2 rounded-md text-base font-medium" :class="[isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">{{link.name}}</DisclosureButton>
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700" v-if="login">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">Tom Cook</div>
              <div class="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button type="button"
              class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton as="a" href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              Your Profile</DisclosureButton>
            <DisclosureButton as="a" href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              Settings</DisclosureButton>
            <DisclosureButton as="a" href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              Sign out</DisclosureButton>
          </div>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700" v-else>
          <div class="px-2 space-y-2">
            <DisclosureButton as="template">
              <router-link to="/login" class="flex items-center justify-center text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 focus:ring-offset-gray-800">Вхід</router-link>
            </DisclosureButton>
            <DisclosureButton as="template">
              <router-link to="/register" class="flex items-center justify-center text-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800">Реєстрація</router-link>
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name: "Header",
  props: {
    login: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      nav: [
        {id: 1, name: "Головна", path: "/"}
      ],
    }
  },
  components: { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, SearchIcon, BellIcon, MenuIcon, XIcon },
}
</script>

<style scoped>
</style>
