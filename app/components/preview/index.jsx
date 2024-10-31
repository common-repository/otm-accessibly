import React from 'react';
import Heading from '../heading';

const Preview = (props) => {
  return (
    <div
      id=""
      style={{ zIndex: "40" }}
    >
      <Heading
        title="Preview"
        text="This is a widget preview that will be visible to your site visitors."
        headingSize='base'
      />
      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          marginTop: "15px"
        }}
      >
<div id="accessiblyOtm">
   <div class="accessibly-otm-widget">
      <div class="accessibly-otm-navigation" style={{ background: props.shop.settings.theme.branding }}>
         <div class="accessibly-otm-row accessibly-otm-justify-between accessibly-otm-align-center">
            <div class="accessibly-otm-column"><button class="accessibly-otm-navigation-back accessibly-otm-navigation-button" data-i18n-key="backButton">Back</button></div>
            <div class="accessibly-otm-column">
               <p class="accessibly-otm-navigation-title accessibly-otm-ignore" data-i18n-key="accessibilityOptions">Accessibility options</p>
            </div>
            <div class="accessibly-otm-column accessibly-otm-align-center accessibly-otm-flex">
              {props.shop.settings.showHideForever && (
                <button class="accessibly-otm-navigation-settings accessibly-otm-ignore accessibly-otm-navigation-button" style={{display: "inline-block"}}>
                  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.3125 26.25C25.1894 26.2502 25.0674 26.226 24.9537 26.1789C24.8399 26.1317 24.7367 26.0625 24.6498 25.9752L4.02481 5.35019C3.85642 5.17295 3.76393 4.93693 3.76706 4.69247C3.77019 4.448 3.86869 4.21443 4.04157 4.04155C4.21444 3.86868 4.44801 3.77017 4.69248 3.76704C4.93694 3.76391 5.17296 3.85641 5.3502 4.0248L25.9752 24.6498C26.1062 24.7809 26.1954 24.9479 26.2316 25.1297C26.2677 25.3115 26.2492 25.5 26.1782 25.6712C26.1073 25.8425 25.9872 25.9888 25.8331 26.0919C25.679 26.1949 25.4979 26.2499 25.3125 26.25ZM14.9801 22.5C12.549 22.5 10.2047 21.7805 8.01212 20.3613C6.01583 19.0723 4.21876 17.226 2.81485 15.0293V15.0246C3.98321 13.3506 5.2629 11.935 6.63751 10.7936C6.64994 10.7832 6.66009 10.7703 6.6673 10.7558C6.67451 10.7413 6.67863 10.7254 6.6794 10.7092C6.68017 10.693 6.67758 10.6769 6.67178 10.6617C6.66598 10.6466 6.6571 10.6328 6.64571 10.6213L5.47852 9.45586C5.45778 9.43494 5.42993 9.42261 5.4005 9.4213C5.37108 9.42 5.34224 9.42983 5.31974 9.44882C3.85958 10.6793 2.50431 12.1887 1.27208 13.9559C1.06008 14.2601 0.943321 14.6206 0.936644 14.9914C0.929966 15.3622 1.03367 15.7266 1.23458 16.0383C2.78204 18.46 4.77364 20.4996 6.99317 21.9357C9.4922 23.5547 12.1817 24.375 14.9801 24.375C16.4906 24.3703 17.9904 24.1214 19.4215 23.6379C19.4404 23.6315 19.4573 23.6204 19.4707 23.6056C19.4841 23.5908 19.4935 23.5729 19.498 23.5535C19.5025 23.534 19.502 23.5138 19.4965 23.4946C19.491 23.4755 19.4807 23.458 19.4666 23.4439L18.2022 22.1795C18.173 22.1511 18.1371 22.1308 18.0977 22.1205C18.0584 22.1102 18.017 22.1104 17.9777 22.1209C16.9985 22.3731 15.9913 22.5004 14.9801 22.5ZM28.7602 13.9805C27.2098 11.5828 25.1983 9.54609 22.9436 8.09003C20.4492 6.47754 17.6953 5.625 14.9801 5.625C13.4856 5.62765 12.0022 5.88178 10.592 6.37675C10.5732 6.38329 10.5564 6.39451 10.5431 6.40934C10.5299 6.42417 10.5206 6.44213 10.5162 6.46153C10.5118 6.48094 10.5124 6.50114 10.518 6.52024C10.5236 6.53933 10.5339 6.5567 10.5481 6.5707L11.8108 7.83339C11.8401 7.86229 11.8766 7.88292 11.9166 7.89321C11.9565 7.9035 11.9984 7.90308 12.0381 7.89199C12.9973 7.63252 13.9865 7.50072 14.9801 7.5C17.3643 7.5 19.7016 8.22832 21.9264 9.66796C23.9602 10.9805 25.7783 12.825 27.1858 15C27.1868 15.0013 27.1874 15.003 27.1874 15.0047C27.1874 15.0064 27.1868 15.008 27.1858 15.0094C26.1641 16.6177 24.8963 18.0557 23.4287 19.2709C23.4162 19.2813 23.4059 19.2941 23.3986 19.3087C23.3912 19.3232 23.387 19.3391 23.3862 19.3554C23.3854 19.3716 23.388 19.3879 23.3938 19.4031C23.3996 19.4183 23.4085 19.4322 23.4199 19.4437L24.5859 20.6092C24.6066 20.63 24.6343 20.6423 24.6636 20.6438C24.6929 20.6452 24.7216 20.6355 24.7442 20.6168C26.311 19.2976 27.6672 17.7469 28.766 16.0184C28.9603 15.7138 29.0629 15.3598 29.0619 14.9986C29.0609 14.6373 28.9561 14.2839 28.7602 13.9805Z" fill="#fff"></path>
                      <path d="M15 9.375C14.5787 9.37477 14.1587 9.42194 13.7479 9.51563C13.7271 9.51993 13.7079 9.52979 13.6923 9.54414C13.6768 9.55849 13.6653 9.5768 13.6593 9.59712C13.6533 9.61744 13.6529 9.63901 13.6582 9.65953C13.6635 9.68006 13.6742 9.69877 13.6893 9.71367L20.2864 16.309C20.3013 16.324 20.32 16.3348 20.3405 16.3401C20.361 16.3453 20.3826 16.345 20.4029 16.3389C20.4232 16.3329 20.4415 16.3215 20.4559 16.3059C20.4702 16.2903 20.4801 16.2711 20.4844 16.2504C20.6722 15.4266 20.672 14.5711 20.4839 13.7473C20.2957 12.9236 19.9244 12.1528 19.3975 11.4923C18.8706 10.8318 18.2017 10.2984 17.4404 9.93187C16.6791 9.56532 15.845 9.37498 15 9.375ZM9.7137 13.691C9.69879 13.676 9.68008 13.6652 9.65956 13.6599C9.63904 13.6547 9.61747 13.6551 9.59714 13.6611C9.57682 13.6671 9.55851 13.6785 9.54416 13.6941C9.52981 13.7097 9.51996 13.7289 9.51565 13.7496C9.30316 14.6779 9.32984 15.645 9.5932 16.5602C9.85655 17.4754 10.348 18.3088 11.0214 18.9822C11.6948 19.6556 12.5281 20.147 13.4433 20.4103C14.3585 20.6737 15.3256 20.7004 16.2539 20.4879C16.2747 20.4836 16.2939 20.4737 16.3095 20.4594C16.3251 20.445 16.3365 20.4267 16.3425 20.4064C16.3485 20.3861 16.3489 20.3645 16.3436 20.344C16.3383 20.3235 16.3276 20.3047 16.3125 20.2898L9.7137 13.691Z" fill="#fff"></path>
                  </svg>
                </button>
              )}
               <button class="accessibly-otm-navigation-settings accessibly-otm-ignore accessibly-otm-navigation-button" aria-label="Language Settings">
                  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.3629 11.4286C14.6053 11.3559 13.8432 11.5125 13.1808 11.8771C12.5184 12.2417 11.9882 12.7963 11.6626 13.4652C11.3371 14.134 11.2322 14.8843 11.3623 15.6133C11.4923 16.3423 11.8511 17.0145 12.3893 17.5377C12.9276 18.0609 13.619 18.4096 14.369 18.536C15.119 18.6624 15.8909 18.5605 16.579 18.244C17.2671 17.9276 17.8377 17.4121 18.2128 16.7683C18.5878 16.1244 18.749 15.3836 18.6742 14.6473C18.5889 13.8219 18.2126 13.0505 17.6091 12.4639C17.0056 11.8773 16.212 11.5115 15.3629 11.4286V11.4286ZM24.2526 15C24.2503 15.3901 24.2208 15.7796 24.1644 16.1658L26.7725 18.1542C26.886 18.2457 26.9626 18.3734 26.9884 18.5146C27.0143 18.6557 26.9879 18.8012 26.9138 18.9252L24.4465 23.0748C24.3715 23.1976 24.2544 23.2907 24.1157 23.3378C23.9771 23.3849 23.8257 23.3829 23.6884 23.3321L21.0982 22.3183C20.9554 22.263 20.8007 22.2431 20.6479 22.2602C20.4952 22.2773 20.3492 22.331 20.2231 22.4164C19.8278 22.6811 19.4124 22.9161 18.9805 23.1196C18.8447 23.1838 18.7273 23.2794 18.6385 23.3982C18.5498 23.5169 18.4925 23.655 18.4717 23.8004L18.0834 26.4858C18.0579 26.6276 17.9826 26.7564 17.8702 26.8502C17.7578 26.944 17.6154 26.997 17.4673 27H12.5327C12.387 26.9976 12.2466 26.947 12.1345 26.8565C12.0224 26.7661 11.9453 26.6413 11.916 26.5026L11.5283 23.8211C11.5065 23.6742 11.4478 23.5347 11.3572 23.4152C11.2666 23.2956 11.147 23.1997 11.0091 23.1359C10.5777 22.9335 10.1637 22.6978 9.77113 22.431C9.64542 22.346 9.49993 22.2927 9.34776 22.276C9.19559 22.2593 9.04153 22.2796 8.89946 22.3351L6.30982 23.3484C6.17259 23.3992 6.02131 23.4013 5.88265 23.3543C5.74398 23.3073 5.62682 23.2143 5.5518 23.0916L3.08447 18.9421C3.01029 18.8181 2.98378 18.6725 3.00966 18.5313C3.03554 18.3902 3.11214 18.2625 3.2258 18.171L5.43008 16.4888C5.55084 16.3956 5.64575 16.2746 5.7062 16.1367C5.76664 15.9988 5.79071 15.8485 5.77621 15.6993C5.75544 15.4654 5.74275 15.2321 5.74275 14.9983C5.74275 14.7645 5.75486 14.5346 5.77621 14.3058C5.78912 14.1575 5.76388 14.0084 5.70275 13.8719C5.64162 13.7355 5.54653 13.616 5.42604 13.5241L3.22292 11.8419C3.1111 11.75 3.03612 11.6227 3.01112 11.4825C2.98612 11.3422 3.0127 11.1979 3.0862 11.0748L5.55353 6.92523C5.62846 6.80242 5.74558 6.70927 5.88426 6.66218C6.02293 6.61509 6.17426 6.6171 6.31156 6.66785L8.90176 7.68168C9.0446 7.73696 9.19932 7.75694 9.35205 7.73981C9.50478 7.72268 9.65076 7.66899 9.7769 7.58355C10.1722 7.31895 10.5876 7.08388 11.0195 6.88037C11.1553 6.81622 11.2727 6.72056 11.3615 6.60184C11.4502 6.48311 11.5075 6.34498 11.5283 6.19963L11.9166 3.51421C11.9421 3.37238 12.0174 3.24357 12.1298 3.14978C12.2422 3.05599 12.3846 3.00305 12.5327 3H17.4673C17.613 3.00245 17.7534 3.05305 17.8655 3.14346C17.9776 3.23387 18.0547 3.3587 18.084 3.49738L18.4717 6.17888C18.4935 6.32583 18.5522 6.46528 18.6428 6.58482C18.7334 6.70437 18.853 6.80031 18.9909 6.86411C19.4223 7.06652 19.8363 7.30223 20.2289 7.56897C20.3546 7.65399 20.5001 7.70727 20.6522 7.72401C20.8044 7.74075 20.9585 7.72042 21.1005 7.66486L23.6902 6.65159C23.8274 6.60079 23.9787 6.5987 24.1174 6.64568C24.256 6.69266 24.3732 6.7857 24.4482 6.90841L26.9155 11.0579C26.9897 11.1819 27.0162 11.3275 26.9903 11.4687C26.9645 11.6098 26.8879 11.7375 26.7742 11.829L24.5699 13.5112C24.4486 13.6041 24.3532 13.725 24.2922 13.8629C24.2313 14.0008 24.2067 14.1513 24.2209 14.3007C24.2399 14.5329 24.2526 14.7662 24.2526 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </button>
               <button class="accessibly-otm-navigation-close accessibly-otm-ignore accessibly-otm-navigation-button" aria-label="Close Accessibility widget">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14.5625 1.4375L1.4375 14.5625M14.5625 14.5625L1.4375 1.4375L14.5625 14.5625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
      <div class="accessibly-otm-tabs">
         <div data-tab="features" class="accessibly-otm-features accessibly-otm-tab accessibly-otm-tab-active">
            <div class="accessibly-otm-features-block">
               <p class="accessibly-otm-features-block-title accessibly-otm-ignore" data-i18n-key="content">Content</p>
               <div class="accessibly-otm-features-row">
                {props.shop.features.includes("bigger_text") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="biggerText" aria-label="Bigger Text">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Bigger Text</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12.9545 3.75L12.9546 2.75H12.9545V3.75ZM22.159 12.9545H23.159V12.9544L22.159 12.9545ZM14 9C14 8.44772 13.5523 8 13 8C12.4477 8 12 8.44772 12 9H14ZM12 17C12 17.5523 12.4477 18 13 18C13.5523 18 14 17.5523 14 17H12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12V14ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14V12ZM12.9545 2.75C10.9362 2.75 8.9633 3.34848 7.28518 4.46977L8.39632 6.13271C9.74555 5.23119 11.3318 4.75 12.9545 4.75V2.75ZM7.28518 4.46977C5.60706 5.59105 4.29913 7.18477 3.52677 9.0494L5.37453 9.81477C5.99551 8.31559 7.0471 7.03423 8.39632 6.13271L7.28518 4.46977ZM3.52677 9.0494C2.75442 10.914 2.55234 12.9658 2.94608 14.9453L4.90765 14.5551C4.59108 12.9636 4.75356 11.3139 5.37453 9.81477L3.52677 9.0494ZM2.94608 14.9453C3.33982 16.9248 4.31171 18.743 5.73883 20.1702L7.15304 18.7559C6.00563 17.6085 5.22422 16.1466 4.90765 14.5551L2.94608 14.9453ZM5.73883 20.1702C7.16595 21.5973 8.98422 22.5692 10.9637 22.9629L11.3539 21.0013C9.76236 20.6848 8.30046 19.9034 7.15304 18.7559L5.73883 20.1702ZM10.9637 22.9629C12.9432 23.3566 14.995 23.1546 16.8596 22.3822L16.0942 20.5345C14.595 21.1554 12.9454 21.3179 11.3539 21.0013L10.9637 22.9629ZM16.8596 22.3822C18.7242 21.6099 20.3179 20.3019 21.4392 18.6238L19.7763 17.5127C18.8748 18.8619 17.5934 19.9135 16.0942 20.5345L16.8596 22.3822ZM21.4392 18.6238C22.5605 16.9457 23.159 14.9727 23.159 12.9545H21.159C21.159 14.5772 20.6778 16.1634 19.7763 17.5127L21.4392 18.6238ZM23.159 12.9544C23.1588 10.2481 22.0837 7.65266 20.17 5.739L18.7558 7.15321C20.2944 8.69183 21.1588 10.7786 21.159 12.9546L23.159 12.9544ZM20.17 5.739C18.2563 3.82533 15.6609 2.75017 12.9546 2.75L12.9544 4.75C15.1304 4.75014 17.2172 5.61459 18.7558 7.15321L20.17 5.739ZM12 9V17H14V9H12ZM17 12H9V14H17V12Z" fill="#313131"></path>
                           <path d="M19.8213 19.8218L26.2496 26.2501" stroke="#313131" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="biggerText" class="accessibly-otm-option-title accessibly-otm-ignore">Bigger Text</p>
                     <div class="accessibly-otm-option-levels">
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="1">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="2">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="3">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                     </div>
                    </button>
                  )}
                  {props.shop.features.includes("bigger_cursor") && (
                    <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="biggerCursor" aria-label="Bigger Cursor" >
                      <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Bigger Cursor</span>
                      <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                          <svg viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.61346 1.43549L16.6437 14.4359L9.75623 14.4034L13.5084 22.7185L9.70171 24.4363L5.9495 16.1212L1.41682 21.3071L1.61346 1.43549Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path>
                          </svg>
                      </span>
                      <p data-i18n-key="biggerCursor" class="accessibly-otm-option-title accessibly-otm-ignore">Bigger Cursor</p>
                    </button>
                  )}
                  {props.shop.features.includes("tooltips") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="tooltips" aria-label="Tooltips">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Text Reader</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24.5732 3.75H6.76074C5.89126 3.75247 5.0581 4.09897 4.44328 4.71379C3.82846 5.32861 3.48197 6.16177 3.47949 7.03125V18.2812C3.48197 19.1507 3.82846 19.9839 4.44328 20.5987C5.0581 21.2135 5.89126 21.56 6.76074 21.5625H9.10449V26.25L14.5959 21.6715C14.6802 21.6011 14.7866 21.5625 14.8965 21.5625H24.5732C25.4427 21.56 26.2759 21.2135 26.8907 20.5987C27.5055 19.9839 27.852 19.1507 27.8545 18.2812V7.03125C27.852 6.16177 27.5055 5.32861 26.8907 4.71379C26.2759 4.09897 25.4427 3.75247 24.5732 3.75V3.75Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path>
                           <path d="M14.2559 11.4163H15.8261V17.1084" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                           <path d="M13.667 17.3047H17.9851" stroke="#000000" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                           <path d="M15.6303 7C15.378 7 15.1313 7.07483 14.9215 7.21501C14.7117 7.3552 14.5482 7.55446 14.4516 7.78758C14.355 8.02071 14.3298 8.27723 14.379 8.52472C14.4282 8.7722 14.5497 8.99953 14.7282 9.17796C14.9066 9.35638 15.1339 9.47789 15.3814 9.52712C15.6289 9.57635 15.8854 9.55108 16.1185 9.45452C16.3517 9.35796 16.5509 9.19443 16.6911 8.98463C16.8313 8.77482 16.9061 8.52815 16.9061 8.27582C16.9061 7.93745 16.7717 7.61294 16.5325 7.37368C16.2932 7.13442 15.9687 7 15.6303 7Z" fill="#000000"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="tooltips" class="accessibly-otm-option-title accessibly-otm-ignore">Tooltips</p>
                  </button>
                  )}
                  {props.shop.features.includes("line_height") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="lineHeight" aria-label="Line Height">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Line Height</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.83398 11.6667H26.834M8.83398 6.33333H26.834M8.83398 1H26.834M8.83398 17H26.834M3.66699 17.5V1M3.66699 17.5L1.66699 15.5M3.66699 17.5L5.66699 15.5M3.66699 1L1.66699 3M3.66699 1L5.66699 3" stroke="#262735" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="lineHeight" class="accessibly-otm-option-title accessibly-otm-ignore">Line Height</p>
                     <div class="accessibly-otm-option-levels">
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="1">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="2">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="3">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                     </div>
                  </button>
                  )}
                  {props.shop.features.includes("hide_images") && (
                    <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="hideImages" aria-label="Hide Images">
                      <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Hide Images</span>
                      <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                          <svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4795 16.6751L11.1674 11.373C10.8294 11.0351 10.375 10.839 9.89724 10.8248C9.41947 10.8106 8.95432 10.9795 8.59688 11.2968L1.47949 17.625M11.792 22.3125L19.0189 15.0855C19.3495 14.7543 19.7918 14.5587 20.2592 14.537C20.7266 14.5153 21.1852 14.6692 21.5449 14.9683L25.8545 18.5625M4.29199 1.6875H23.042C24.5953 1.6875 25.8545 2.9467 25.8545 4.5V19.5C25.8545 21.0533 24.5953 22.3125 23.042 22.3125H4.29199C2.73869 22.3125 1.47949 21.0533 1.47949 19.5V4.5C1.47949 2.9467 2.73869 1.6875 4.29199 1.6875ZM20.2295 7.3125C20.2295 8.34803 19.39 9.1875 18.3545 9.1875C17.319 9.1875 16.4795 8.34803 16.4795 7.3125C16.4795 6.27697 17.319 5.4375 18.3545 5.4375C19.39 5.4375 20.2295 6.27697 20.2295 7.3125Z" stroke="#313131" stroke-width="2" stroke-linejoin="round"></path>
                          </svg>
                      </span>
                      <p data-i18n-key="hideImages" class="accessibly-otm-option-title accessibly-otm-ignore">Hide images</p>
                    </button>
                  )}
                  {props.shop.features.includes("readable_fonts") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="readableFonts" aria-label="Readable Fonts">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Readable Fonts</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.20801 20.3457L8.23926 1.5957L15.2705 20.3457M12.8096 13.7832H3.66895M18.4346 10.0332C19.1488 8.35215 20.8369 7.2207 22.7705 7.2207C25.4658 7.2207 27.458 9.0957 27.458 11.9082V20.3457M18.083 17.0059C18.083 19.1152 19.6568 20.4043 21.5986 20.4043C24.7627 20.4043 27.458 18.8223 27.458 14.1934V13.3145C26.2861 13.3145 24.0596 13.373 22.0674 13.6074C20.1473 13.8336 18.083 14.7207 18.083 17.0059Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="readableFonts" class="accessibly-otm-option-title accessibly-otm-ignore">Readable fonts</p>
                  </button>
                   )}
                  {props.shop.features.includes("dyslexic_font") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="dyslexicFont" aria-label="Dyslexic Font">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Dyslexic Font</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_1342_6340)">
                              <path d="M1.03936 24L8.23936 5.775H10.5644L17.7394 24H14.2144L13.5144 21.025H5.31436L4.38936 24H1.03936ZM12.7644 18.125L9.38936 8.025L6.03936 18.125H12.7644ZM28.9507 16.2V24H26.7007V22.05C25.6757 23.55 24.2007 24.35 21.9757 24.35C19.2007 24.35 17.4007 22.65 17.4007 20.025C17.4007 16.95 19.4757 15.375 23.5507 15.375H26.7007V15.15C26.7007 13.075 25.4507 11.825 22.8257 11.65C21.2757 11.65 19.7757 12.025 18.4007 12.775V10.95C20.0507 10.325 21.6007 10 23.0507 10C27.0257 10 28.9507 12.025 28.9507 16.2ZM25.4507 17.025H23.4257C20.1507 17.025 19.3007 17.725 19.2757 19.4C19.5257 20.8 20.7007 20.925 22.3257 20.925C24.5757 20.925 25.4507 20.45 25.4507 17.525V17.025Z" fill="#262735"></path>
                           </g>
                           <defs>
                              <clipPath id="clip0_1342_6340">
                                 <rect width="30" height="30" fill="white"></rect>
                              </clipPath>
                           </defs>
                        </svg>
                     </span>
                     <p data-i18n-key="dyslexicFont" class="accessibly-otm-option-title accessibly-otm-ignore">Dyslexic Font</p>
                  </button>
                  )}
               </div>
            </div>
            <div class="accessibly-otm-features-block">
               <p class="accessibly-otm-features-block-title accessibly-otm-ignore" data-i18n-key="colors">Colors</p>
               <div class="accessibly-otm-features-row">
               {props.shop.features.includes("invert_colors") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="invert" aria-label="Invert Colors">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Invert Color</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.167 27.1875C21.898 27.1875 27.3545 21.731 27.3545 15C27.3545 8.26903 21.898 2.8125 15.167 2.8125C8.43602 2.8125 2.97949 8.26903 2.97949 15C2.97949 21.731 8.43602 27.1875 15.167 27.1875Z" stroke="#313131" stroke-width="2" stroke-miterlimit="10"></path>
                           <path d="M15.167 10.3125V19.6875C16.4102 19.6875 17.6025 19.1936 18.4816 18.3146C19.3606 17.4355 19.8545 16.2432 19.8545 15C19.8545 13.7568 19.3606 12.5645 18.4816 11.6854C17.6025 10.8064 16.4102 10.3125 15.167 10.3125ZM15.167 2.8125V10.3125C13.9238 10.3125 12.7315 10.8064 11.8524 11.6854C10.9734 12.5645 10.4795 13.7568 10.4795 15C10.4795 16.2432 10.9734 17.4355 11.8524 18.3146C12.7315 19.1936 13.9238 19.6875 15.167 19.6875V27.1875C8.43574 27.1875 2.97949 21.7313 2.97949 15C2.97949 8.26875 8.43574 2.8125 15.167 2.8125Z" fill="#313131"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="invert" class="accessibly-otm-option-title accessibly-otm-ignore">Invert Colors</p>
                  </button>
                  )}
                  {props.shop.features.includes("brightness") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="brightness" aria-label="Brightness">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Brightness</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13.333 1.8125V4.625M13.333 23.375V26.1875M21.951 5.38203L19.9623 7.3707M6.70371 20.6293L4.71504 22.618M25.5205 14H22.708M3.95801 14H1.14551M21.951 22.618L19.9623 20.6293M6.70371 7.3707L4.71504 5.38203M18.0205 14C18.0205 16.5888 15.9218 18.6875 13.333 18.6875C10.7442 18.6875 8.64551 16.5888 8.64551 14C8.64551 11.4112 10.7442 9.3125 13.333 9.3125C15.9218 9.3125 18.0205 11.4112 18.0205 14Z" stroke="#313131" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="brightness" class="accessibly-otm-option-title accessibly-otm-ignore">Brightness</p>
                     <div class="accessibly-otm-option-levels">
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="1">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="2">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                     </div>
                  </button>
                  )}
                  {props.shop.features.includes("contrast") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="contrast" aria-label="Contrast">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Contrast</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.47949 14C1.47949 20.731 6.93602 26.1875 13.667 26.1875V1.8125C6.93602 1.8125 1.47949 7.26903 1.47949 14Z" fill="#000000"></path>
                           <path d="M13.667 26.1875C20.398 26.1875 25.8545 20.731 25.8545 14C25.8545 7.26903 20.398 1.8125 13.667 1.8125M13.667 26.1875C6.93602 26.1875 1.47949 20.731 1.47949 14C1.47949 7.26903 6.93602 1.8125 13.667 1.8125M13.667 26.1875V1.8125" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="contrast" class="accessibly-otm-option-title accessibly-otm-ignore">Contrast</p>
                     <div class="accessibly-otm-option-levels">
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="1">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="2">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                     </div>
                  </button>
                  )}
                  {props.shop.features.includes("grayscale") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="grayscale" aria-label="Grayscale">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Grayscale Color</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.167 27.1875C21.898 27.1875 27.3545 21.731 27.3545 15C27.3545 8.26903 21.898 2.8125 15.167 2.8125C8.43602 2.8125 2.97949 8.26903 2.97949 15C2.97949 21.731 8.43602 27.1875 15.167 27.1875Z" stroke="#313131" stroke-width="2" stroke-miterlimit="10"></path>
                           <path d="M15.167 10.3125V19.6875C16.4102 19.6875 17.6025 19.1936 18.4816 18.3146C19.3606 17.4355 19.8545 16.2432 19.8545 15C19.8545 13.7568 19.3606 12.5645 18.4816 11.6854C17.6025 10.8064 16.4102 10.3125 15.167 10.3125ZM15.167 2.8125V10.3125C13.9238 10.3125 12.7315 10.8064 11.8524 11.6854C10.9734 12.5645 10.4795 13.7568 10.4795 15C10.4795 16.2432 10.9734 17.4355 11.8524 18.3146C12.7315 19.1936 13.9238 19.6875 15.167 19.6875V27.1875C8.43574 27.1875 2.97949 21.7313 2.97949 15C2.97949 8.26875 8.43574 2.8125 15.167 2.8125Z" fill="#313131"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="grayscale" class="accessibly-otm-option-title accessibly-otm-ignore">Grayscale</p>
                  </button>
                  )}
                  {props.shop.features.includes("saturation") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="saturation" aria-label="Saturation">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Saturation</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M23.4375 18.75C23.4375 23.9279 20.1779 27.1875 15 27.1875C9.82207 27.1875 6.5625 23.9279 6.5625 18.75C6.5625 13.1936 12.6111 5.69239 14.4662 3.52266C14.5322 3.44557 14.6141 3.38369 14.7063 3.34126C14.7985 3.29883 14.8988 3.27686 15.0003 3.27686C15.1018 3.27686 15.2021 3.29883 15.2943 3.34126C15.3865 3.38369 15.4684 3.44557 15.5344 3.52266C17.3889 5.69239 23.4375 13.1936 23.4375 18.75Z" stroke="#262735" stroke-width="2" stroke-miterlimit="10"></path>
                           <path d="M20.1562 19.2188C20.1562 20.3376 19.7118 21.4107 18.9206 22.2019C18.1294 22.993 17.0564 23.4375 15.9375 23.4375" stroke="#262735" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="saturation" class="accessibly-otm-option-title accessibly-otm-ignore">Saturation</p>
                     <div class="accessibly-otm-option-levels">
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="1">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                        <span class="accessibly-otm-ignore">
                           <svg viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-border="2">
                              <rect x="0.333344" width="30" height="3" rx="1.5" fill="#EFF1F7"></rect>
                           </svg>
                        </span>
                     </div>
                  </button>
                  )}
               </div>
            </div>
            <div class="accessibly-otm-features-block">
               <p class="accessibly-otm-features-block-title accessibly-otm-ignore" data-i18n-key="navigation">Navigation</p>
               <div class="accessibly-otm-features-row">
                {props.shop.features.includes("reading_line") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="readingLine" aria-label="Reading Line">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Reading Line</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 29 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="1.75" y="1" width="26" height="4" rx="2" stroke="#313131" stroke-width="2"></rect>
                        </svg>
                     </span>
                     <p data-i18n-key="readingLine" class="accessibly-otm-option-title accessibly-otm-ignore">Reading Line</p>
                  </button>
                )}
                {props.shop.features.includes("highlight_links") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="highlightLinks" aria-label="Highlight Links">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Highlight Links</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.5205 12.625H6.77051C5.27867 12.625 3.84792 12.0324 2.79303 10.9775C1.73814 9.92258 1.14551 8.49184 1.14551 7C1.14551 5.50816 1.73814 4.07742 2.79303 3.02252C3.84792 1.96763 5.27867 1.375 6.77051 1.375H10.5205M16.1455 1.375H19.8955C21.3874 1.375 22.8181 1.96763 23.873 3.02252C24.9279 4.07742 25.5205 5.50816 25.5205 7C25.5205 8.49184 24.9279 9.92258 23.873 10.9775C22.8181 12.0324 21.3874 12.625 19.8955 12.625H16.1455M7.90078 7H18.8824" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="highlightLinks" class="accessibly-otm-option-title accessibly-otm-ignore">Highlight Links</p>
                  </button>
                  )}
                  {props.shop.features.includes("read_page") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="textReader" aria-label="Text Reader">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Text Reader</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.292 13.7499C17.8627 12.6126 18.2295 11.3587 18.2295 9.99993C18.2295 8.62239 17.8779 7.39837 17.292 6.24993M20.1045 16.5624C21.2459 14.5702 21.9795 12.8124 21.9795 9.99993C21.9795 7.18743 21.2764 5.44719 20.1045 3.43743M5.9043 6.24993H1.82324C1.69892 6.24993 1.57969 6.29931 1.49179 6.38722C1.40388 6.47513 1.35449 6.59436 1.35449 6.71868V13.2812C1.35449 13.4055 1.40388 13.5247 1.49179 13.6126C1.57969 13.7005 1.69892 13.7499 1.82324 13.7499H5.9043C6.12097 13.75 6.33092 13.8252 6.49844 13.9626L11.858 18.3572C11.9279 18.4086 12.0107 18.4396 12.0971 18.4467C12.1836 18.4538 12.2704 18.4369 12.3477 18.3976C12.4251 18.3584 12.4901 18.2984 12.5354 18.2245C12.5807 18.1505 12.6047 18.0654 12.6045 17.9786V2.02122C12.6044 1.93456 12.5804 1.84961 12.535 1.77581C12.4895 1.70201 12.4245 1.64224 12.3472 1.60315C12.2699 1.56405 12.1832 1.54716 12.0969 1.55435C12.0105 1.56154 11.9278 1.59253 11.858 1.64387L6.49844 6.0384C6.33076 6.17541 6.12083 6.25015 5.9043 6.24993Z" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                     <p data-i18n-key="textReader" class="accessibly-otm-option-title accessibly-otm-ignore">Read page</p>
                  </button>
                  )}
                {props.shop.features.includes("reading_mask") && (
                  <button class="accessibly-otm-read-ignore accessibly-otm-option-button accessibly-otm-ignore" id="readingMask" aria-label="Reading Mask">
                     <span class="accessibly-otm-read-ignore accessibly-otm-assertive accessibly-otm-ignore" aria-live="assertive">Reading Mask</span>
                     <span class="accessibly-otm-option-icon accessibly-otm-ignore">
                        <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_1343_2456)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.542 22.7344C28.5423 22.9777 28.4881 23.218 28.3832 23.4375H29.4795C29.9973 23.4375 30.417 23.8572 30.417 24.375C30.417 24.8928 29.9973 25.3125 29.4795 25.3125H1.35449C0.836725 25.3125 0.416992 24.8928 0.416992 24.375C0.416992 23.8572 0.836725 23.4375 1.35449 23.4375H2.45078C2.34591 23.218 2.29165 22.9777 2.29199 22.7344V18.2262C2.7964 18.7057 3.47858 19 4.22949 19H26.6045C27.3554 19 28.0376 18.7057 28.542 18.2262V22.7344ZM28.542 10.7738V6.32812C28.542 5.893 28.3691 5.4757 28.0615 5.16803C27.7538 4.86035 27.3365 4.6875 26.9014 4.6875H3.93262C3.4975 4.6875 3.0802 4.86035 2.77252 5.16803C2.46484 5.4757 2.29199 5.893 2.29199 6.32812V10.7738C2.7964 10.2943 3.47858 10 4.22949 10H26.6045C27.3554 10 28.0376 10.2943 28.542 10.7738Z" fill="#262735"></path>
                              <path d="M1.41699 12.8125L1.41699 16.1875C1.41699 17.7408 2.67619 19 4.22949 19H26.6045C28.1578 19 29.417 17.7408 29.417 16.1875V12.8125C29.417 11.2592 28.1578 10 26.6045 10L4.22949 10C2.67619 10 1.41699 11.2592 1.41699 12.8125Z" stroke="#262735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </g>
                           <defs>
                              <clipPath id="clip0_1343_2456">
                                 <rect width="30" height="30" fill="white" transform="translate(0.416992)"></rect>
                              </clipPath>
                           </defs>
                        </svg>
                     </span>
                     <p data-i18n-key="readingMask" class="accessibly-otm-option-title accessibly-otm-ignore">Reading Mask</p>
                  </button>
                )}
               </div>
            </div>
         </div>
        </div>
      <div class="accessibly-otm-footer">
         <div class="accessibly-otm-reset-button-container"><button class="accessibly-otm-reset-button accessibly-otm-ignore" data-i18n-key="reset">Reset settings</button></div>
         <div class="accessibly-otm-row">
            <div class="accessibly-otm-column"><a class="accessibly-otm-footer-link accessibly-otm-ignore" data-i18n-key="statement">Accessibility statement</a><a class="accessibly-otm-footer-link accessibly-otm-ignore" href="mailto:hello@accessiblyapp.com?subject=Reporting an issue - does-family-healthy-snacks.myshopify.com" data-i18n-key="report">Report an issue</a></div>
          <div class="accessibly-otm-column">
            {props.shop.settings.showAccessiblyLogo && (
              <span class="accessibly-otm-footer-logo accessibly-otm-ignore"><svg viewBox="0 0 173 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M62.7438 25.0094L56.0679 7.20324H50.3457L43.6963 25.0094H48.8622L49.7364 22.4466H56.7037L57.5779 25.0094H62.7438ZM55.4586 18.4422H50.955L53.2068 11.7415L55.4586 18.4422Z" fill="#313131"></path><path d="M70.089 25.3298C72.8441 25.3298 74.5661 24.0751 75.3344 22.9538L72.6852 20.4444C72.1819 21.1652 71.3606 21.6991 70.2745 21.6991C68.579 21.6991 67.2809 20.4978 67.2809 18.549C67.2809 16.6002 68.579 15.4256 70.2745 15.4256C71.3606 15.4256 72.1819 15.9061 72.6852 16.6536L75.3344 14.1709C74.5661 13.023 72.8441 11.7949 70.089 11.7949C66.0888 11.7949 63.0952 14.5179 63.0952 18.549C63.0952 22.6068 66.0888 25.3298 70.089 25.3298Z" fill="#313131"></path><path d="M83.3348 25.3298C86.09 25.3298 87.8119 24.0751 88.5802 22.9538L85.931 20.4444C85.4277 21.1652 84.6064 21.6991 83.5203 21.6991C81.8248 21.6991 80.5267 20.4978 80.5267 18.549C80.5267 16.6002 81.8248 15.4256 83.5203 15.4256C84.6064 15.4256 85.4277 15.9061 85.931 16.6536L88.5802 14.1709C87.8119 13.023 86.09 11.7949 83.3348 11.7949C79.3346 11.7949 76.341 14.5179 76.341 18.549C76.341 22.6068 79.3346 25.3298 83.3348 25.3298Z" fill="#313131"></path><path d="M96.5807 25.3298C98.541 25.3298 100.66 24.7692 101.932 23.6212L100.21 21.0584C99.4947 21.7525 97.9317 22.153 97.031 22.153C95.1766 22.153 94.064 21.0584 93.8255 19.8571H102.939V18.9761C102.939 14.598 100.184 11.7949 96.3952 11.7949C92.395 11.7949 89.5869 14.8116 89.5869 18.549C89.5869 22.7403 92.6334 25.3298 96.5807 25.3298ZM99.0444 17.1875H93.7725C93.9315 16.2532 94.6203 14.9718 96.3952 14.9718C98.2761 14.9718 98.9384 16.2799 99.0444 17.1875Z" fill="#313131"></path><path d="M109.849 25.3298C113.531 25.3298 115.677 23.5144 115.677 21.0584C115.677 15.7726 108.233 17.2409 108.233 15.7459C108.233 15.212 108.895 14.8116 109.849 14.8116C111.386 14.8116 112.843 15.479 113.611 16.2265L115.174 13.5035C113.796 12.489 111.968 11.7949 109.823 11.7949C106.273 11.7949 104.339 13.7704 104.339 16.0396C104.339 21.2186 111.783 19.5634 111.783 21.2453C111.783 21.8326 111.28 22.233 110.061 22.233C108.551 22.233 106.511 21.3788 105.557 20.5245L103.862 23.3543C105.213 24.5556 107.571 25.3298 109.849 25.3298Z" fill="#313131"></path><path d="M122.681 25.3298C126.363 25.3298 128.509 23.5144 128.509 21.0584C128.509 15.7726 121.065 17.2409 121.065 15.7459C121.065 15.212 121.727 14.8116 122.681 14.8116C124.217 14.8116 125.675 15.479 126.443 16.2265L128.006 13.5035C126.628 12.489 124.8 11.7949 122.654 11.7949C119.105 11.7949 117.171 13.7704 117.171 16.0396C117.171 21.2186 124.615 19.5634 124.615 21.2453C124.615 21.8326 124.111 22.233 122.893 22.233C121.383 22.233 119.343 21.3788 118.389 20.5245L116.694 23.3543C118.045 24.5556 120.403 25.3298 122.681 25.3298Z" fill="#313131"></path><path d="M132.652 10.9674C133.95 10.9674 134.983 9.89953 134.983 8.59143C134.983 7.28333 133.95 6.24219 132.652 6.24219C131.354 6.24219 130.32 7.28333 130.32 8.59143C130.32 9.89953 131.354 10.9674 132.652 10.9674ZM134.692 25.0094V12.1153H130.612V25.0094H134.692Z" fill="#313131"></path><path d="M141.728 20.5512V16.6002C142.232 15.9061 143.291 15.4256 144.166 15.4256C145.782 15.4256 147 16.6269 147 18.549C147 20.4978 145.782 21.6991 144.166 21.6991C143.291 21.6991 142.232 21.2453 141.728 20.5512ZM141.728 25.0094V23.5144C142.788 24.7425 144.086 25.3298 145.517 25.3298C148.669 25.3298 151.159 22.9271 151.159 18.549C151.159 14.3311 148.696 11.7949 145.517 11.7949C144.113 11.7949 142.735 12.3556 141.728 13.637V7.20324H137.649V25.0094H141.728Z" fill="#313131"></path><path d="M157.38 25.0094V7.20324H153.301V25.0094H157.38Z" fill="#313131"></path><path d="M160.072 30.0282C160.496 30.1617 161.45 30.2418 161.821 30.2418C164.258 30.1884 166.192 29.5744 167.225 26.8514L173 12.1153H168.682L165.768 20.2842L162.881 12.1153H158.589L163.675 25.1963L163.384 25.8904C163.172 26.4243 162.589 26.6112 161.662 26.6112C161.344 26.6112 160.947 26.5311 160.655 26.3709L160.072 30.0282Z" fill="#313131"></path><path d="M16.9433 2.73279C14.3471 2.73279 11.956 3.41599 9.76972 4.64574C7.58349 5.94382 5.8755 7.65181 4.64574 9.83804C3.34767 12.0243 2.73279 14.3471 2.73279 16.9433C2.73279 19.5394 3.34767 21.9306 4.64574 24.1169C5.8755 26.3031 7.58349 28.0111 9.76972 29.2409C11.956 30.5389 14.3471 31.1538 16.9433 31.1538C19.5394 31.1538 21.8623 30.5389 24.0486 29.2409C26.2348 28.0111 27.9428 26.3031 29.2409 24.1169C30.4706 21.9306 31.1538 19.5394 31.1538 16.9433C31.1538 14.3471 30.4706 12.0243 29.2409 9.83804C27.9428 7.65181 26.2348 5.94382 24.0486 4.64574C21.8623 3.41599 19.5394 2.73279 16.9433 2.73279ZM16.9433 0C19.9494 0 22.8188 0.819837 25.4149 2.32287C28.0111 3.82591 30.0607 5.8755 31.5637 8.47165C33.0668 11.0678 33.8866 13.9372 33.8866 16.9433C33.8866 20.0177 33.0668 22.8188 31.5637 25.4149C30.0607 28.0111 28.0111 30.129 25.4149 31.632C22.8188 33.1351 19.9494 33.8866 16.9433 33.8866C13.8689 33.8866 11.0678 33.1351 8.47165 31.632C5.8755 30.129 3.75759 28.0111 2.25455 25.4149C0.751517 22.8188 0 20.0177 0 16.9433C0 13.9372 0.751517 11.0678 2.25455 8.47165C3.75759 5.8755 5.8755 3.82591 8.47165 2.32287C11.0678 0.819837 13.8689 0 16.9433 0ZM16.9433 3.82591C19.2662 3.82591 21.4524 4.44078 23.502 5.60222C25.4833 6.83197 27.0546 8.40333 28.2844 10.3846C29.4458 12.4342 30.0607 14.6204 30.0607 16.9433C30.0607 19.3345 29.4458 21.5207 28.2844 23.502C27.0546 25.5516 25.4833 27.1229 23.502 28.2844C21.4524 29.5141 19.2662 30.0607 16.9433 30.0607C14.5521 30.0607 12.3659 29.5141 10.3846 28.2844C8.33501 27.1229 6.76365 25.5516 5.60222 23.502C4.37246 21.5207 3.82591 19.3345 3.82591 16.9433C3.82591 14.6204 4.37246 12.4342 5.60222 10.3846C6.76365 8.40333 8.33501 6.83197 10.3846 5.60222C12.3659 4.44078 14.5521 3.82591 16.9433 3.82591ZM16.9433 6.83197C16.2601 6.83197 15.6452 7.10525 15.167 7.58349C14.6887 8.06173 14.4838 8.60829 14.4838 9.29149C14.4838 9.97468 14.6887 10.5896 15.167 11.0678C15.6452 11.546 16.2601 11.751 16.9433 11.751C17.6265 11.751 18.1731 11.546 18.6513 11.0678C19.1295 10.5896 19.4028 9.97468 19.4028 9.29149C19.4028 8.60829 19.1295 8.06173 18.6513 7.58349C18.1731 7.10525 17.6265 6.83197 16.9433 6.83197ZM25.005 13.5273C25.2783 13.5273 25.4833 13.3224 25.6199 13.0491C25.7565 12.7758 25.8249 12.5025 25.7565 12.2292C25.6882 11.956 25.5516 11.6827 25.2783 11.546C25.005 11.4094 24.7317 11.3411 24.4585 11.4094C22.1356 11.956 20.3593 12.2976 19.1295 12.4342C17.6265 12.6392 16.1918 12.6392 14.7571 12.4342C13.459 12.2976 11.6827 11.956 9.42812 11.4094C9.08653 11.3411 8.81325 11.4094 8.53997 11.546C8.26669 11.6827 8.13005 11.956 8.06173 12.2292C7.99341 12.5025 8.06173 12.7758 8.19837 13.0491C8.33501 13.3224 8.60829 13.459 8.88157 13.5273C11.2728 14.0739 13.1174 14.4838 14.4838 14.6204C14.4838 17.4899 14.2788 19.7444 14.0055 21.3841C13.8006 22.4089 13.459 23.5703 12.9808 24.8001L12.7758 25.21C12.6392 25.5516 12.7075 25.8932 12.8441 26.1665C12.9808 26.5081 13.1857 26.713 13.5273 26.8497C13.8006 26.9863 14.1422 26.918 14.4155 26.7813C14.6887 26.6447 14.962 26.4397 15.0987 26.1665L15.3036 25.6882C15.5769 24.8684 15.8502 24.1169 16.0551 23.5703C16.2601 22.7505 16.4651 21.8623 16.6017 20.7692H17.2849C17.4215 21.8623 17.5582 22.7505 17.8315 23.5703C17.9681 24.1169 18.2414 24.8684 18.583 25.6882L18.7879 26.1665C18.9246 26.4397 19.1295 26.6447 19.4028 26.7813C19.6761 26.918 20.0177 26.9863 20.3593 26.8497C20.6326 26.713 20.9058 26.5081 21.0425 26.1665C21.1791 25.8932 21.1791 25.5516 21.1108 25.21L20.9058 24.8001C20.3593 23.5703 20.0177 22.4089 19.881 21.3841C19.5394 19.7444 19.4028 17.4899 19.4028 14.6204C20.7009 14.4838 22.5455 14.0739 25.005 13.5273Z" fill="#574CD5"></path></svg></span>
            )}
          </div>
         </div>
      </div>
   </div>
</div>
      </div>
    </div>
  );
}
 export default Preview;
