import { useContext } from "react";
import { DarkModeContext } from "../providers/DarkMode";

export function YoutubeLogo() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <svg
      width="127"
      height="25"
      viewBox="0 0 127 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.7699 3.96917C33.3744 2.50074 32.2165 1.34294 30.7482 0.947592C28.0655 0.213379 17.3347 0.213379 17.3347 0.213379C17.3347 0.213379 6.60386 0.213379 3.92116 0.919353C2.48096 1.3147 1.29492 2.50074 0.899579 3.96917C0.193604 6.65186 0.193604 12.215 0.193604 12.215C0.193604 12.215 0.193604 17.8063 0.899579 20.4608C1.29492 21.9292 2.45272 23.087 3.92116 23.4823C6.63211 24.2166 17.3347 24.2166 17.3347 24.2166C17.3347 24.2166 28.0655 24.2166 30.7482 23.5106C32.2165 23.1152 33.3744 21.9574 33.7699 20.489C34.4757 17.8063 34.4757 12.2432 34.4757 12.2432C34.4757 12.2432 34.5039 6.65186 33.7699 3.96917Z"
        fill="#FF0000"
      />
      <path
        d="M13.9178 7.07547V17.3545L22.8413 12.215L13.9178 7.07547Z"
        fill="white"
      />
      <path
        d="M121.282 17.6871C121.282 18.6472 121.31 19.3815 121.366 19.8615C121.423 20.3416 121.536 20.7087 121.733 20.9064C121.903 21.1323 122.185 21.2452 122.581 21.2452C123.089 21.2452 123.428 21.0476 123.625 20.6522C123.823 20.2569 123.908 19.6074 123.936 18.6755L126.845 18.8449C126.873 18.9861 126.873 19.1555 126.873 19.3815C126.873 20.7652 126.506 21.81 125.743 22.4878C124.981 23.1655 123.908 23.5043 122.524 23.5043C120.858 23.5043 119.7 22.9678 119.022 21.923C118.345 20.8781 118.006 19.2685 118.006 17.0659V14.4396C118.006 12.1805 118.345 10.5427 119.051 9.49781C119.757 8.45297 120.943 7.94466 122.609 7.94466C123.766 7.94466 124.67 8.17058 125.292 8.59415C125.913 9.01773 126.336 9.69547 126.59 10.5709C126.845 11.4745 126.958 12.717 126.958 14.2984V16.8682H121.282V17.6871ZM121.705 10.5991C121.536 10.825 121.423 11.1639 121.366 11.644C121.31 12.124 121.282 12.8582 121.282 13.8466V14.9197H123.766V13.8466C123.766 12.8865 123.738 12.1523 123.682 11.644C123.625 11.1357 123.484 10.7968 123.315 10.5991C123.145 10.4014 122.863 10.2885 122.524 10.2885C122.129 10.2603 121.875 10.3732 121.705 10.5991Z"
        fill={darkMode ? "#18181b" : "#e5e7eb"}
      />
      <path
        d="M104.959 8.28353V23.3349H102.305L102.023 21.4994H101.938C101.232 22.8831 100.13 23.5891 98.6904 23.5891C97.7021 23.5891 96.9678 23.2502 96.4878 22.6007C96.0077 21.9512 95.7817 20.9346 95.7817 19.5226V8.28353H99.1704V19.325C99.1704 20.0027 99.2552 20.4828 99.3962 20.7652C99.5374 21.0476 99.7917 21.1887 100.13 21.1887C100.413 21.1887 100.695 21.104 100.978 20.9064C101.26 20.7369 101.458 20.511 101.571 20.2286V8.28353H104.959Z"
        fill={darkMode ? "#18181b" : "#e5e7eb"}
      />
      <path
        d="M96.7983 5.45963H93.4378V23.3067H90.1339V5.45963H86.7734V2.72044H96.7983V5.45963Z"
        fill={darkMode ? "#18181b" : "#e5e7eb"}
      />
      <path
        d="M116.17 10.6838C115.972 9.72373 115.634 9.04598 115.182 8.62238C114.73 8.1988 114.081 7.97289 113.29 7.97289C112.669 7.97289 112.075 8.14232 111.539 8.50945C111.002 8.84829 110.579 9.32838 110.297 9.89313H110.268V1.95798H106.993V23.3067H109.788L110.127 21.8947H110.212C110.466 22.403 110.861 22.7984 111.398 23.109C111.934 23.3914 112.499 23.5608 113.149 23.5608C114.306 23.5608 115.125 23.0243 115.662 21.9794C116.199 20.9346 116.481 19.2685 116.481 17.0376V14.6655C116.453 12.943 116.368 11.6157 116.17 10.6838ZM113.064 16.8117C113.064 17.913 113.008 18.7602 112.923 19.3815C112.838 20.0027 112.669 20.4545 112.471 20.7087C112.245 20.9628 111.963 21.104 111.624 21.104C111.341 21.104 111.087 21.0476 110.861 20.9064C110.635 20.7652 110.438 20.5675 110.297 20.3133V11.7852C110.41 11.3898 110.607 11.051 110.89 10.7686C111.172 10.5144 111.483 10.3732 111.793 10.3732C112.132 10.3732 112.415 10.5144 112.584 10.7686C112.782 11.051 112.895 11.5028 112.979 12.124C113.064 12.7735 113.092 13.6772 113.092 14.835V16.8117H113.064Z"
        fill={darkMode ? "#18181b" : "#e5e7eb"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.4132 15.4269C47.3989 15.5173 47.3642 15.6034 47.3116 15.6786C47.2588 15.7539 47.1897 15.8164 47.1091 15.8614C46.9469 15.965 46.8048 16.0169 46.6612 16.0687C46.3552 16.1731 46.0332 16.2776 45.6925 16.3988C45.3333 16.5199 45.0114 16.6411 44.7241 16.7288C44.3657 16.85 44.025 16.9544 43.7014 17.0756C43.4577 17.1787 43.2292 17.313 43.0211 17.4751C42.8275 17.6484 42.6588 17.8469 42.5189 18.065C42.3754 18.3074 42.2848 18.6199 42.2848 18.9843C42.2848 19.7138 42.4641 20.2687 42.8233 20.6155C43.1816 20.9806 43.846 21.1536 44.8304 21.1536C45.8346 21.1536 46.5158 20.9631 46.8758 20.5812C47.2333 20.1993 47.4123 19.662 47.4123 18.9684V15.4269H47.4132ZM44.8312 7.73883C46.5894 7.73883 47.8798 8.06892 48.7039 8.7458C49.5288 9.40597 49.9412 10.255 49.9412 11.2611V19.835C49.9412 20.1818 49.8701 20.5637 49.7451 20.9798C49.6183 21.3976 49.3683 21.7787 48.9735 22.1247C48.5973 22.4731 48.0776 22.7681 47.414 22.9937C46.7508 23.2194 45.8903 23.3405 44.8323 23.3405C43.7758 23.3405 42.9136 23.2194 42.2512 22.9937C41.5885 22.7681 41.0679 22.4731 40.6917 22.1247C40.342 21.8129 40.0768 21.4192 39.921 20.9798C39.7943 20.5645 39.7224 20.1826 39.7224 19.8358V18.4653C39.7224 17.7358 39.9193 17.0589 40.3141 16.4681C40.7088 15.8614 41.264 15.4452 41.9816 15.1845C42.3399 15.0633 42.7522 14.9422 43.218 14.7859C43.6846 14.6288 44.1137 14.4725 44.5448 14.3347C44.9758 14.1951 45.3521 14.0556 45.6741 13.9336C45.8682 13.8567 46.0657 13.7875 46.2657 13.7263L46.5885 13.57C46.7152 13.5007 46.8394 13.3962 46.9653 13.2575C47.0904 13.1196 47.1978 12.9633 47.2881 12.7895C47.3838 12.6013 47.433 12.3934 47.4319 12.1829V11.6271C47.4333 11.4235 47.39 11.2219 47.3052 11.0363C47.2341 10.8274 47.0904 10.6369 46.8934 10.4639C46.6965 10.2901 46.4271 10.1514 46.1051 10.0461C45.782 9.94329 45.3529 9.89064 44.8676 9.89064C43.8636 9.89064 43.2001 10.0829 42.8417 10.4806C42.5377 10.8283 42.3584 11.262 42.3228 11.7475C42.3228 11.8519 42.2333 11.9213 42.1251 11.9213L39.9386 11.9564C39.8869 11.9566 39.8368 11.9365 39.7999 11.9005C39.7627 11.8645 39.7417 11.8155 39.7409 11.7642V11.2628C39.7409 10.7756 39.8315 10.3243 40.0284 9.89064C40.2262 9.4561 40.5311 9.09261 40.9429 8.77923C41.3552 8.46754 41.8937 8.20764 42.5385 8.03381C43.1665 7.82491 43.9372 7.73883 44.8332 7.73883H44.8312ZM84.4689 15.4269C84.4547 15.5173 84.42 15.6034 84.3674 15.6786C84.3145 15.7539 84.2454 15.8164 84.1648 15.8614C84.0043 15.965 83.8605 16.0169 83.7167 16.0687C83.4126 16.1731 83.089 16.2776 82.7483 16.3988C82.3891 16.5199 82.0663 16.6411 81.7798 16.7288C81.4206 16.85 81.0799 16.9544 80.7571 17.0756C80.5132 17.1786 80.2844 17.3129 80.076 17.4751C79.8827 17.6485 79.7143 17.8469 79.5747 18.065C79.4312 18.3074 79.3414 18.6199 79.3414 18.9843C79.3414 19.7138 79.519 20.2687 79.8782 20.6155C80.2365 20.9806 80.9009 21.1536 81.8861 21.1536C82.8921 21.1536 83.5724 20.9631 83.9316 20.5812C84.2891 20.1993 84.4681 19.662 84.4681 18.9684V15.4269H84.4689ZM81.8878 7.73883C83.6459 7.73883 84.9364 8.06892 85.7613 8.7458C86.5854 9.40597 86.9977 10.255 86.9977 11.2611V19.835C86.9977 20.1818 86.9267 20.5637 86.8008 20.9798C86.6758 21.3976 86.4248 21.7787 86.0301 22.1247C85.6539 22.4731 85.1341 22.7681 84.4706 22.9937C83.8082 23.2194 82.9469 23.3405 81.8898 23.3405C80.8332 23.3405 79.9711 23.2194 79.3086 22.9937C78.6459 22.7681 78.1254 22.4731 77.7491 22.1247C77.4 21.8127 77.1354 21.4191 76.9801 20.9798C76.8534 20.5637 76.7815 20.1818 76.7815 19.835V18.4645C76.7815 17.7349 76.9793 17.0581 77.3731 16.4673C77.7679 15.8606 78.324 15.4444 79.0407 15.1837C79.399 15.0625 79.8113 14.9414 80.2779 14.7851C80.7428 14.628 81.1739 14.4717 81.6047 14.3338C82.0358 14.1943 82.4112 14.0547 82.734 13.9327C82.9281 13.8558 83.1256 13.7867 83.3256 13.7255L83.6485 13.5692C83.7735 13.4999 83.8994 13.3954 84.0244 13.2567C84.1528 13.1157 84.2614 12.9583 84.3472 12.7887C84.4429 12.6005 84.4921 12.3926 84.491 12.182V11.6263C84.4924 11.4226 84.4491 11.2211 84.3643 11.0355C84.2932 10.8266 84.1503 10.6361 83.9525 10.4631C83.7556 10.2893 83.4879 10.1505 83.1642 10.0453C82.8411 9.94245 82.412 9.8898 81.9267 9.8898C80.9227 9.8898 80.2603 10.082 79.9011 10.4798C79.5968 10.8274 79.4175 11.2611 79.3811 11.7466C79.3811 11.8511 79.2924 11.9205 79.1853 11.9205H77.0106C76.9591 11.9203 76.9099 11.9002 76.8733 11.8646C76.8366 11.829 76.8156 11.7807 76.8145 11.7299V11.226C76.8145 10.7413 76.904 10.2901 77.1018 9.85557C77.2987 9.42267 77.6031 9.05751 78.0146 8.7458C78.4286 8.43328 78.9654 8.17254 79.6119 7.99957C80.2206 7.82407 80.9913 7.73799 81.8878 7.73799V7.73883ZM74.197 7.80821H75.6321C75.7571 7.80821 75.8469 7.9302 75.8114 8.05054L75.3269 9.85557C75.3101 9.94329 75.2197 9.9951 75.1479 9.9951H74.1439C73.6062 9.9951 73.176 10.0645 72.8356 10.204C72.5119 10.3419 72.2439 10.4982 72.0638 10.6887C71.8847 10.8809 71.7765 11.0706 71.7233 11.262C71.6749 11.449 71.6509 11.6413 71.6514 11.8344V22.9937C71.6503 23.0449 71.6288 23.0936 71.5916 23.1293C71.5546 23.165 71.5046 23.1847 71.4528 23.1843H69.3028C69.2513 23.1843 69.2018 23.1643 69.1649 23.1287C69.1282 23.0931 69.107 23.0447 69.1058 22.9937V11.3305C69.1058 11.1232 69.1414 10.8107 69.2309 10.4113C69.3028 10.0127 69.5182 9.63077 69.8589 9.23131C70.1996 8.84941 70.7015 8.50262 71.3826 8.22518C72.0646 7.94609 72.997 7.80737 74.197 7.80737V7.80821ZM66.9541 19.4531V19.9737C66.9541 20.1993 66.9203 20.5118 66.8299 20.9113C66.758 21.2923 66.5426 21.6918 66.2019 22.0728C65.8612 22.4556 65.3593 22.8024 64.6782 23.0798C63.997 23.3581 63.0638 23.4976 61.8638 23.4976C60.6637 23.4976 59.7305 23.3581 59.0493 23.0798C58.3682 22.8024 57.8661 22.4731 57.5256 22.0737C57.1849 21.6926 56.9695 21.2932 56.8976 20.8954C56.8266 20.4943 56.7734 20.2001 56.7734 19.9745V8.29456C56.7734 8.1901 56.8629 8.10235 56.9704 8.10235H59.1033C59.2116 8.10235 59.3011 8.1901 59.3011 8.29456V19.2274C59.3011 19.5918 59.3545 19.8525 59.4085 20.0606C59.4634 20.2695 59.5708 20.4767 59.7322 20.6506C59.8928 20.8411 60.1448 20.9974 60.4844 21.1185C60.8072 21.2405 61.2562 21.3107 61.8115 21.3107C62.386 21.3107 62.851 21.2405 63.1922 21.1185C63.5329 20.9974 63.7839 20.8411 63.9632 20.6673C64.1405 20.4943 64.2673 20.3037 64.3207 20.0948C64.3747 19.8859 64.4474 19.7138 64.4474 19.2091V8.27783C64.4474 8.17421 64.5361 8.0873 64.6435 8.0873H66.7765C66.8831 8.0873 66.9726 8.17421 66.9726 8.27951V19.4547H66.9558L66.9541 19.4531ZM52.273 2.23856H54.4069C54.5143 2.23856 54.6038 2.32463 54.6038 2.42825V23.0974C54.6032 23.1485 54.5822 23.1974 54.5453 23.2334C54.5084 23.2694 54.4586 23.2896 54.4069 23.2896H52.273C52.2213 23.2896 52.1715 23.2694 52.1346 23.2334C52.0976 23.1974 52.0767 23.1485 52.0761 23.0974V2.42825C52.0929 2.32463 52.1656 2.23772 52.273 2.23772V2.23856Z"
        fill={darkMode ? "#18181b" : "#e5e7eb"}
      />
    </svg>
  );
}