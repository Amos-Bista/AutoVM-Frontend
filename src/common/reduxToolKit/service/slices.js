// src/store/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  activeStep: 0,
  adminusername: "supAdmin@gmail.com",
  adminpassword: "admin980",
  billingCycle: "",
  selectStorage: "",
  selectedRegion: "",
  selectedOS: "",
  selectedVersion: "",
  selectedVersionvalue: "",
  username: "",
  hostname: "",
  password: "",
  confirmPassword: "",
  privateNetworking: false,
  ip: false,
  backup: false,
  serverManage: false,
  monitoring: false,
  soldCPU: 0,
  soldRAM: 0,
  soldtiers: "",
  soldstorage: "",
  soldsnapshot: 1,
  soldCPUvalue: "",
  soldRAMvalue: "GB",
  soldstoragevalue: "SSD",
  soldsnapshotvalue: "",
  soldservicename: "",
  soldserviceprice: 0,
  initialPrice: 0,
  soldservicebillingperiod: 0,
  soldservicebillingperiodvalue: "",
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAdminusername: (state, action) => {
      state.adminusername = action.payload;
    },
    setAdminpassword: (state, action) => {
      state.adminpassword = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    setBillingCycle: (state, action) => {
      state.billingCycle = action.payload;
    },
    setSelectStorage: (state, action) => {
      state.selectStorage = action.payload;
    },
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
    setSelectedOS: (state, action) => {
      state.selectedOS = action.payload;
    },
    setSelectedVersion: (state, action) => {
      state.selectedVersion = action.payload;
    },
    setSelectedVersionvalue: (state, action) => {
      state.selectedVersionvalue = action.payload;
    },
    setHostname: (state, action) => {
      state.hostname = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setPrivateNetworking: (state, action) => {
      state.privateNetworking = action.payload;
    },
    setBandwidth: (state, action) => {
      state.bandwidth = action.payload;
    },
    setIp: (state, action) => {
      state.ip = action.payload;
    },
    setBackup: (state, action) => {
      state.backup = action.payload;
    },
    setServerManage: (state, action) => {
      state.serverManage = action.payload;
    },
    setMonitoring: (state, action) => {
      state.monitoring = action.payload;
    },
    setSoldCPU: (state, action) => {
      state.soldCPU = action.payload;
    },
    setSoldRAM: (state, action) => {
      state.soldRAM = action.payload;
    },
    setSoldstorage: (state, action) => {
      state.soldstorage = action.payload;
    },
    setSoldsnapshot: (state, action) => {
      state.soldsnapshot = action.payload;
    },
    setSoldCPUvalue: (state, action) => {
      state.soldCPUvalue = action.payload;
    },
    setSoldRAMvalue: (state, action) => {
      state.soldRAMvalue = action.payload;
    },
    setSoldstoragevalue: (state, action) => {
      state.soldstoragevalue = action.payload;
    },
    setSoldsnapshotvalue: (state, action) => {
      state.soldsnapshotvalue = action.payload;
    },
    setSoldservicename: (state, action) => {
      state.soldservicename = action.payload;
    },
    setSoldserviceprice: (state, action) => {
      state.soldserviceprice = action.payload;
    },
    setSoldservicebillingperiod: (state, action) => {
      state.soldservicebillingperiod = action.payload;
    },
    setInitialPrice: (state, action) => {
      state.initialPrice = action.payload;
    },
    setSoldservicebillingperiodvalue: (state, action) => {
      state.soldservicebillingperiodvalue = action.payload;
    },
    setSoldtiers: (state, action) => {
      state.soldtiers = action.payload;
    },
  },
});

export const {
  setSoldtiers,
  setLoading,
  setActiveStep,
  setBillingCycle,
  setSelectStorage,
  setSelectedRegion,
  setSelectedOS,
  setSelectedVersion,
  setSelectedVersionvalue,
  setHostname,
  setUsername,
  setPassword,
  setConfirmPassword,
  setPrivateNetworking,
  setBandwidth,
  setIp,
  setBackup,
  setServerManage,
  setMonitoring,
  setAdminpassword,
  setAdminusername,
  setSoldCPU,
  setSoldRAM,
  setSoldstorage,
  setSoldsnapShot,
  setSoldCPUvalue,
  setSoldRAMvalue,
  setSoldstoragevalue,
  setSoldsnapShotvalue,
  setSoldservicename,
  setSoldserviceprice,
  setInitialPrice,
  setSoldservicebillingperiod,
  setSoldservicebillingperiodvalue,
} = slice.actions;

export default slice.reducer;
