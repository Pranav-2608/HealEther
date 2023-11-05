import Phone from '../src/assets/phone.png';
import qrcode from '../src/assets/QRCode.png';
import Abha1 from '../src/assets/phoneimg1.png'
import Abha2 from '../src/assets/phoneimg2.png'
import Abha3 from '../src/assets/phoneimg3.png'
import aadhar from '../src/assets/aadhar.png'

import acc1 from "../src/assets/accordion1.png"
import acc2 from "../src/assets/accordion2.png"
import acc3 from "../src/assets/accordion3.png"

// Data2
import smartphone2 from '../src/assets/smart2.jpg'; 
import digiacc from '../src/assets/digiacc1.png'; 
import medacc from '../src/assets/digiacc2.png'; 
import careacc from '../src/assets/careacc3.png'; 

import med from "../src/assets/finaltestreport.png";
import care from "../src/assets/share.png";

import digi1 from '../src/assets/Group+9398.png'
import digi2 from '../src/assets/storage.png'
import digi3 from '../src/assets/Group+9400.png'

// Data3
import wateracc from '../src/assets/activityacc1.png';
import activityacc from '../src/assets/activityacc2.png';
import sleepacc from '../src/assets/activityacc3.png';

import waterTrackerImg from '../src/assets/waterglass.png';
import activityTrackingImg1 from '../src/assets/Group+9368.png'
import activityTrackingImg2 from '../src/assets/Group+9369.png'
import activityTrackingImg3 from '../src/assets/Group+7.png'
import SleepTrackerImg from '../src/assets/Group+9255.png'

const Data1={
    content1:{
        h1:"Unique and Reliable Identity",
        p:'Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time.',
        img:acc1,
    },
    content2:{
        h1:"Consolidated Benefits Platform",
        p:'Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.',
        img:acc2,
    },
    content3:{
        h1:"Quick and Easy Registration",
        p:'Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card.',
        img:acc3,
    },
    image:{
        img1:qrcode,
        img2:Abha1,
        img3:Abha2,
        img4:Abha3,
        img5:aadhar,
        mobile:Phone,
    }
}


const Data2={
    content1:{
        h1:"MedTrack",
        p:'Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference.',
        img:digiacc,
    },
    content2:{
        h1:"Digitrack",
        p:'Effortlessly record and manage digital details of your medical treatments. the patients in one practice',
        img:medacc,
    },
    content3:{
        h1:"CareTrack",
        p:'Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports through a single platform',
        img:careacc,
    },
    image:{
        img1:med,
        img2:digi1,
        img3:digi2,
        img4:digi3,
        img5:care,
        mobile:smartphone2,
    }
}


const Data3={
    content1:{
        h1:"Water Tracker",
        p:'Measures and monitors heart rate during workouts or daily and activities.',
        img:wateracc,
    },
    content2:{
        h1:"Activity Tracker",
        p:'Tracks steps, distance, calories burned, and other physical and activities.',
        img:activityacc,
    },
    content3:{
        h1:"Sleep Tracker",
        p:'Monitors sleep patterns, providing insights into sleep quality and duration.',
        img:sleepacc,
    },
    image:{
        img1:waterTrackerImg,
        img2:activityTrackingImg1,
        img3:activityTrackingImg2,
        img4:activityTrackingImg3,
        img5:SleepTrackerImg,
        mobile:smartphone2,
    }
}

const Abha={
    para:"Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.",
    h:"Unlock India's Digital Health Ecosystem with Seamless Access",
    head:"ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID",
    btn1:"create abha",
  }
  const HealthRecord={
    para:"Experience a cutting-edge solution for effortless management of your health records. Gain secure and convenient digital access.",
    h:"NOW Link Your Health Records with ABHA ID",
    head:"STREAMLINED HEALTH RECORD MANAGEMENT MADE EFFORTLESS",
    btn1:"Upload now",
  }

  const LinkAbha={
    para:"Sync your healthcare devices, elevate consistency, and be on the path of a transformational journey like never before!",
    h:"Connect to the fitness galaxy and embark on an adventure",
    head:"SYNC, TRANSFORM, GET FIT WITH SMART HEALTH",
    btn1:"Download app",
  }


export{
    Data1,Data2,Data3,Abha,HealthRecord,LinkAbha
}