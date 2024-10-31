import React from 'react';
import Heading from '../heading';
import Card from '../layout/card';
const SkeletonPage = () => {

  return (
    <div className="">
      <div className="px-4 py-4">
        <Heading
          title="Settings"
          headingSize='xl'
        />
      </div>

      <div id="tabs" class="settings-tab">
          <div class="nav-tab-wrapper">
            <a class={`nav-tab nav-tab-active`} href="#general" id="general-tab" >General</a>
            <a class={`nav-tab`} href="#features" id="features-tab" >Features</a>
            <a class={`nav-tab`} href="#advanced" id="advanced-tab" >Advanced</a>
          </div>
      </div>

      <div className="lg:flex">
        <div className="lg:w-7/12 w-full">
          <Card classes="max-w-3xl">

          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-4 bg-gray-200 rounded-sm dark:bg-gray-200 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-sm dark:bg-gray-200 max-w-[360px] mb-5"></div>
          </div>

            <div role="status" class="p-4 space-y-4 max-w-xl rounded border border-gray-100 divide-y divide-gray-100 shadow animate-pulse dark:divide-gray-300 md:p-6 dark:border-gray-300">

              <div class="flex justify-between items-center">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </div>

          <div role="status" class="max-w-sm animate-pulse mt-5">
            <div class="h-4 bg-gray-200 rounded-sm dark:bg-gray-200 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-sm dark:bg-gray-200 max-w-[360px] mb-5"></div>
          </div>

            <div role="status" class="p-4 space-y-4 max-w-xl rounded border border-gray-100 divide-y divide-gray-100 shadow animate-pulse dark:divide-gray-300 md:p-6 dark:border-gray-300">

              <div class="flex justify-between items-center">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <div class="flex justify-between items-center pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                  </div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </div>

          </Card>
        </div>
        <div className="lg:w-5/12 w-full px-4">
        <Card>

        </Card>
        </div>
      </div>
    </div>

  )
}

export default SkeletonPage;
