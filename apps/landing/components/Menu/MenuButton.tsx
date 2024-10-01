'use client';
import { cn } from '@paolojulian.dev/design-system/utils';
import styles from './MenuButton.module.css';
import { useMenu } from './Menu.context';

export default function MenuButton() {
  const { setIsOpen } = useMenu();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className='z-30 fixed bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-black via-black to-transparent flex justify-center pt-10'></div>
      <button
        className={cn(
          'fixed inset-x-0 bottom-10 mx-auto',
          'aspect-square h-16',
          'rounded-full group z-50',
          styles.menuButton
        )}
        onClick={handleClick}
      >
        <svg
          width='63'
          height='63'
          viewBox='0 0 63 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(
            // Positioning
            'absolute -top-12 -left-1',

            // Text
            'text-gray',

            styles.menuText
          )}
        >
          <path
            d='M49.0599 29.82C49.0718 29.7681 49.0969 29.7301 49.1353 29.706C49.1864 29.674 49.238 29.6639 49.29 29.6759L51.1145 30.0949C51.1665 30.1068 51.2033 30.1372 51.2249 30.1859C51.2593 30.2266 51.2706 30.273 51.2586 30.325L49.5038 37.9661C49.4919 38.0181 49.4604 38.0601 49.4092 38.0921C49.3709 38.1161 49.3257 38.1222 49.2737 38.1102L47.4492 37.6912C47.3972 37.6793 47.354 37.653 47.3196 37.6122C47.298 37.5635 47.2931 37.5131 47.3051 37.4611L47.366 37.196C47.3731 37.1648 47.3675 37.1417 47.3491 37.1265C47.3307 37.1113 47.3075 37.1169 47.2796 37.1434C47.0735 37.3259 46.8401 37.4364 46.5795 37.4751C46.3317 37.5057 46.0519 37.4852 45.74 37.4136C45.1162 37.2704 44.6446 36.9651 44.3251 36.4977C44.008 36.0199 43.9402 35.386 44.1216 34.5959L45.4109 28.982C45.4228 28.9301 45.4479 28.892 45.4863 28.868C45.5374 28.836 45.589 28.8259 45.641 28.8379L47.4655 29.2569C47.5174 29.2688 47.5543 29.2992 47.5759 29.3479C47.6103 29.3886 47.6216 29.435 47.6096 29.487L46.4314 34.6174C46.3622 34.9189 46.3656 35.166 46.4418 35.3586C46.5307 35.5431 46.6895 35.6617 46.9183 35.7142C47.147 35.7668 47.3492 35.7202 47.5249 35.5745C47.7007 35.4288 47.8232 35.2052 47.8924 34.9037L49.0599 29.82Z'
            fill='currentColor'
          />
          <path
            d='M39.3283 28.1324C40.0533 28.1545 40.5897 28.411 40.9375 28.9018C41.2854 29.3926 41.4462 30.0699 41.4198 30.9335L41.2543 36.3549C41.2527 36.4082 41.2299 36.4556 41.186 36.4969C41.153 36.5279 41.1099 36.5426 41.0566 36.541L39.1854 36.4839C39.1321 36.4823 39.0846 36.4648 39.043 36.4315C39.0123 36.3879 38.9978 36.3394 38.9994 36.2861L39.1595 31.0406C39.1689 30.7314 39.1123 30.4895 38.9895 30.315C38.8775 30.1409 38.7041 30.0502 38.4696 30.043C38.2244 30.0356 38.0297 30.1203 37.8856 30.2974C37.7524 30.464 37.681 30.7073 37.6712 31.0272L37.5121 36.2407C37.5104 36.294 37.4877 36.3414 37.4437 36.3827C37.4107 36.4137 37.3676 36.4284 37.3143 36.4268L35.4432 36.3697C35.3899 36.368 35.3424 36.3506 35.3007 36.3173C35.27 36.2737 35.2555 36.2252 35.2571 36.1719L35.4963 28.3356C35.4979 28.2822 35.5152 28.2401 35.5482 28.2091C35.5921 28.1677 35.6407 28.1479 35.6941 28.1495L37.5652 28.2066C37.6185 28.2082 37.6605 28.2309 37.6912 28.2745C37.7328 28.3078 37.7529 28.3511 37.7512 28.4044L37.742 28.7082C37.741 28.7402 37.7512 28.7565 37.7725 28.7572C37.8045 28.7582 37.8424 28.738 37.8864 28.6966C38.2399 28.3019 38.7206 28.1138 39.3283 28.1324Z'
            fill='currentColor'
          />
          <path
            d='M33.1659 32.4075C33.1685 32.4607 33.1496 32.5097 33.1091 32.5544C33.0787 32.588 33.0369 32.6061 32.9836 32.6087L29.468 32.7831C29.4147 32.7858 29.3894 32.8137 29.392 32.867L29.4214 33.4583C29.4346 33.7246 29.5149 33.9449 29.6624 34.1191C29.82 34.2822 30.0107 34.3582 30.2344 34.3471C30.4368 34.337 30.5988 34.2649 30.7203 34.1307C30.8412 33.9859 30.918 33.8112 30.9506 33.6067C30.9773 33.4986 31.0439 33.4419 31.1504 33.4366L32.9929 33.4413C33.0462 33.4387 33.0898 33.4578 33.1239 33.4989C33.1681 33.5287 33.1865 33.5759 33.179 33.6403C33.1451 34.4643 32.8884 35.1018 32.4088 35.5528C31.9393 35.9926 31.2465 36.2352 30.3303 36.2807C29.3821 36.3277 28.6301 36.1301 28.0741 35.6877C27.5177 35.2347 27.2186 34.5874 27.1768 33.7458L27.0231 30.6456C26.9829 29.8359 27.217 29.1729 27.7254 28.6564C28.2444 28.1394 28.9727 27.8576 29.9102 27.8111C30.8477 27.7646 31.5949 27.9732 32.1519 28.4368C32.7196 28.8999 33.0235 29.5363 33.0636 30.346L33.1659 32.4075ZM30.0061 29.7447C29.7824 29.7558 29.6002 29.8503 29.4595 30.0282C29.3294 30.2055 29.271 30.4273 29.2842 30.6937L29.3151 31.3169C29.3178 31.3702 29.3457 31.3955 29.399 31.3928L30.7733 31.3247C30.8266 31.322 30.8519 31.2941 30.8492 31.2408L30.8183 30.6176C30.8051 30.3512 30.7197 30.1365 30.5621 29.9735C30.4152 29.8099 30.2298 29.7336 30.0061 29.7447Z'
            fill='currentColor'
          />
          <path
            d='M20.3306 26.5842C20.3545 26.4919 20.4239 26.4335 20.5386 26.409L22.3539 26.0224C22.4061 26.0113 22.4523 26.0233 22.4925 26.0583C22.5409 26.0808 22.5706 26.118 22.5817 26.1702L24.8348 36.7489C24.8459 36.8011 24.8351 36.8525 24.8022 36.9031C24.7776 36.9411 24.7392 36.9656 24.687 36.9767L22.8561 37.3667C22.8039 37.3778 22.7536 37.3721 22.7052 37.3497C22.6651 37.3147 22.6394 37.271 22.6283 37.2189L21.1318 30.1925C21.1229 30.1508 21.108 30.1321 21.0872 30.1366C21.0663 30.141 21.0488 30.1611 21.0346 30.1968L20.2739 32.6164C20.2395 32.7109 20.2067 32.7616 20.1754 32.7682C20.1441 32.7749 20.0934 32.742 20.0235 32.6697L18.3429 30.7701C18.3154 30.7432 18.2912 30.732 18.2703 30.7365C18.2495 30.7409 18.2435 30.764 18.2524 30.8058L19.7489 37.8322C19.76 37.8843 19.7491 37.9357 19.7163 37.9863C19.6916 38.0243 19.6533 38.0488 19.6011 38.0599L17.7702 38.4499C17.718 38.461 17.6677 38.4554 17.6193 38.4329C17.5791 38.3979 17.5535 38.3543 17.5424 38.3021L15.2893 27.7234C15.2782 27.6712 15.2849 27.6262 15.3096 27.5882C15.3424 27.5376 15.3849 27.5067 15.4371 27.4956L17.2367 27.1123C17.341 27.0901 17.4282 27.1151 17.4981 27.1875L19.4208 29.3791C19.461 29.4141 19.4923 29.4075 19.5147 29.3591L20.3306 26.5842Z'
            fill='currentColor'
          />
        </svg>
        <div className='relative bg-white aspect-square h-16 rounded-full group-hover:scale-110 group-active:scale-95 transition-transform duration-500'></div>
      </button>
    </>
  );
}
