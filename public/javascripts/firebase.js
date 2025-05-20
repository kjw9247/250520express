  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC2sX17c56GRR-6re5lKc3RAeVsRInT5hI",
    authDomain: "prj-2505.firebaseapp.com",
    databaseURL: "https://prj-2505-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "prj-2505",
    storageBucket: "prj-2505.firebasestorage.app",
    messagingSenderId: "583453385529",
    appId: "1:583453385529:web:0ab601ab0b6c8f61f53ee8",
  };
  // Initialize Firebase
  // module 방식을 적용하고 있어서 import 로컬 파일 참조가 안됨
  // 모듈방식에서 기본 내보내기 -default 사용 가능함. 한번만 사용이 가능함
  export const app = initializeApp(firebaseConfig);