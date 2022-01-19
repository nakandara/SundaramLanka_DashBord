import React, { useContext, useEffect, useState } from "react";
import "./dprone.css";
import logo from "./unnamed.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { reportContext } from "../context/ContextProvider";
import apiThree from "../../src/api/apiThree";
import api from "../../src/api/api";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const Dpr = () => {
  const {
    ddate,
    productionDashActual,
    setProductionDashActual,
    productionDashPlan,
    setProductionDashPlan,
    productionDashAdherence,
    setProductionDashAdherence,
    productionDashUtilization,
    setProductionDashUtilization,
    setProductionDashProductivity,
    qualityDashFtr,
    setQualityDashFtr,
    qualityDashBerlc,
    setQualityDashBerlc,
    qualityDashB,
    setQualityDashB,
    qualityDashE,
    setQualityDashE,
    qualityR,
    setQualityR,
    setQualityL,
    setQualityC,
    qualityDashFlash,
    setQualityDashFlash,
    qualityDashRejectCompound,
    setQualityDashRejectCompound,
    qualityDashHold,
    setQualityDashHold,
    mixingDashTonnage,
    setMixingDashTonnage,
    mixingDashTonnagePlan,
    setMixingDashTonnagePlan,
    mixingDashProductivity,
    setMixingDashProductivity,
    mixingDashBreakDown,
    setMixingDashBreakDown,
    setMixingDashEnergy,
    beadDashEnergy,
    beadDashBead,
    setBeadDashBead,
    beadDashBeadPlan,
    setBeadDashBeadPlan,
    beadDashRejectBead,
    setBeadDashRejectBead,
    beadDashBreakDown,
    setBeadDashBreakDown,
    hrDashNearMiss,
    setHRDashNearMis,
    hrDashKaizen,
    setHRDashKaizen,
    hrDashNRC,
    setHRDashNRC,
    hrDashRA,
    setHRDashRA,
    hrDashdOT,
    setHRDashDot,
    hrDashAI,
    setHRDashAI,
    hrDashANI,
    setHRDashANI,
    engDashBreakDown,
    setENGDashBreakDown,
    engDashFuelRate,
    setENGDashFuelRate,
    engDashFuelConsumption,
    engDashEnergyCostRate,
    setENGDashEnergyCostRate,
    engDashPowerConsumption,
    setENGDashPowerConsumption,
    setQualityDashNM,
    setHRDashManpower,
    setMfgTireinvert,
    mfgTireinvert,
    hrDashManpower,
    tireInverdactual,
    setTireInverdactual,
    dispatch,
    tireStkAcuuracyTar,
    setTireStkAcuuracyTar,
    dailypdi,
    setDailypdi,
    shotblast1,
    setShotblast1,
    shotblast2,
    setShotblast2,
    setShipment,
    shipment,
    shipment2,
    setShipment2,
    fgsActual,
    setFgsActual
    
  } = useContext(reportContext);

  const navigate = useNavigate();

  var newd = new Date(ddate);
  let monthNumber = newd.getMonth() + 1;
  let yearNumber = newd.getFullYear();
  let dateNumber = newd.getDate();

  var parmDate = yearNumber + "-" + monthNumber + "-" + dateNumber;

  var paramDateOne = yearNumber + "-" + monthNumber + "-" + "1";

  ////////////state

  const [productionMtd, setProductionMtd] = useState("");
  // pramod create shot blast,fgs accuracy mtd
  const[shipmentplan,setShipmentplan]=useState("")
  const [shotblastmtd1, setShotblastmtd1] = useState("");
  const [shotblastmtd2, setShotblastmtd2] = useState("");
  const [fgsAccuracMTD1, setFgsAccuracMTD1] = useState("");
  const [productionAdherenceMtd, setProductionAdherenceMtd] = useState("");
  const [productionUtilizationMtd, setProductionUtilizationMtd] = useState("");
  const [dailyPdIMTD, setDailyPdIMTD] = useState("");
  const [shipmentIMTD, setShipmentIMTD] = useState("");
  const [tireInveredMTD, settireInveredMTD] = useState("");
  // Add a day
  const [
    productionDashProductivityMtd,
    setProductionDashProductivityMtd,
  ] = useState("");

  /////////////////quality///////////////

  const [qualityDashFtrMtd, setQualityDashFtrMtd] = useState("");

  const [qualityDashBerlcMtd, setQualityDashBerlcMtd] = useState("");

  const [qualityDashBMtd, setQualityDashBMtd] = useState("");

  const [qualityDashEMtd, setQualityDashEMtd] = useState();

  const [qualityRMtd, setQualityRMtd] = useState();

  const [qualityLMtd, setQualityLMtd] = useState();

  const [qualityCMtd, setQualityCMtd] = useState();

  const [qualityDashFlashMtd, setQualityDashFlashMtd] = useState();

  const [
    qualityDashRejectCompoundMtd,
    setQualityDashRejectCompoundMtd,
  ] = useState();

  const [qualityDashHoldMtd, setQualityDashHoldMtd] = useState();

  const [qualityDashNMMtd, setQualityDashNMMtd] = useState();

  ///////////////Mixing///////////////

  const [mixingDashTonnageMtd, setMixingDashTonnageMtd] = useState();
  const [mixingDashTonnagePlanMtd, setMixingDashTonnagePlanMtd] = useState();

  const [mixingDashProductivityMtd, setMixingDashProductivityMtd] = useState();

  const [mixingDashBreakDownMtd, setMixingDashBreakDownMtd] = useState();

  const [mixingDashEnergyMtd, setMixingDashEnergyMtd] = useState();

  ////////bead////////////////////////

  const [beadDashBeadMtd, setBeadDashBeadMtd] = useState();
  const [beadDashBeadPlanMtdMtd, setBeadDashBeadPlanMtd] = useState();

  const [beadDashRejectBeadMtd, setBeadDashRejectBeadMtd] = useState();

  const [beadDashEnergyMtd, setBeadDashEnergyMtd] = useState();

  const [beadDashBreakDownMtd, setBeadDashBreakDownMtd] = useState();

  ////////////////////hr///////////////////

  const [hrDashNearMissMtd, setHRDashNearMisMtd] = useState();

  const [hrDashKaizenMtd, setHRDashKaizenMtd] = useState();

  const [hrDashNRCMtd, setHRDashNRCMtd] = useState();

  const [hrDashRAMtd, setHRDashRAMtd] = useState();

  const [hrDashdOTMtd, setHRDashDotMtd] = useState();

  const [hrDashAIMtd, setHRDashAIMtd] = useState();

  const [hrDashANIMtd, setHRDashANIMtd] = useState();

  const [hrDashManpowerMtd, setHRDashManpowerMtd] = useState("");
  ////////////////////fgs///////////////////

  ////////////////////////////////////////

  const [engDashBreakDownMtd, setENGDashBreakDownMtd] = useState("");

  const [engDashFuelRateMtd, setENGDashFuelRateMtd] = useState("");

  const [engDashFuelConsumptionMtd, setengDashFuelConsumptionMtd] = useState(
    ""
  );

  const [engDashEnergyCostRateMtd, setengDashEnergyCostRateMtd] = useState("");

  const [engDashPowerConsumptionMtd, setENGDashPowerConsumptionMtd] = useState(
    ""
  );
  //quality

  // const a =[{total:'0'},{value:'7'}]

  // console.log(a[1].value);

  const pa = "plan_adherence";

  const pb = "production_data";
  //////////////////////////////
  const qa = "berlc";

  const qb = "quality_data";

  ////////production////////////
  const pda = "actual_weight";
  const pdpl = "plan_weight";

  const pdadherence = "plan_adherence";

  const pdu = "plant_utilization";

  const pdp = "productivity";

  //////////quality

  const qdflash = "flash";

  const qdftr = "ftr";

  const qdb = "b";

  const qde = "ea";

  const qdr = "r";

  const qdl = "l";

  const qdc = "c";

  const qdnm = "nm_dirty_tires";

  const qdberlc = "berlc";

  //////////mixing

  const mb = "mixing_data";

  const mdwa = "compound_weight_actual";

  const mdwp = "compound_weight_plan";

  const mdbd = "mixing_break_down";

  const mdp = "mixing_productivity";

  const mdm = "mixing_man_power";

  const mde = "mixing_energy";

  /////////eng

  const eb = "eng_data";

  const edeck = "energy_cost_kg";

  const edec = "energy_consumed";

  const edb = "break_down";

  const edfcr = "firewood_cost_rate";

  const edoil = "oil";

  const edpm = "pm";

  //////////////hr

  const hb = "hr_data";

  const hdai = "absent_inform";

  const hdani = "absent_non_inform";

  const hddot = "dot";

  const hdra = "reportable_accident";

  const hdnm = "near_miss";

  const hdk = "kaizen";

  const hdt = "training";

  const hdnra = "non_reportable_accident";

  const hdm = "man_power";

  /////////////bead

  const bb = "bead_data";

  const bdcba = "creel_bead_actual";
  const bdcbp = "creel_bead_plan";

  const bdrb = "reject_bead";

  const bde = "bead_energy";

  const bdbd = "bead_breakdown";

  const bdbp = "bead_productivity_actual";

  const bmpa = "bead_manpower_actual";

  /////////////hold

  const hob = "hold_data";

  const hdhc = "hold_compound";

  const hdrc = " reject_compound";

  const fetchData = async () => {
    try {
      /////////////////////////////

      const responsePone = await apiThree.get(
        `/dashboard/${pda}/${pb}/${parmDate}`
      );
      console.log(pda);

      setProductionDashActual(responsePone.data.data.data.actual_weight);

      const responsePtwo = await apiThree.get(
        `/dashboard/${pdpl}/${pb}/${parmDate}`
      );

      setProductionDashPlan(responsePtwo.data.data.data.plan_weight);

      const responsePthree = await apiThree.get(
        `/dashboard/${pdadherence}/${pb}/${parmDate}`
      );
      setProductionDashAdherence(responsePthree.data.data.data.plan_adherence);

      const responsePfour = await apiThree.get(
        `/dashboard/${pdu}/${pb}/${parmDate}`
      );

      setProductionDashUtilization(
        responsePfour.data.data.data.plant_utilization
      );

      const responsePfive = await apiThree.get(
        `/dashboard/${pdp}/${pb}/${parmDate}`
      );

      setProductionDashProductivity(responsePfive.data.data.data.productivity);

      // pramod fgs data

      //       ///////////////////////////////////////////////////Qulaity

      //       const responseQone = await apiThree.get(`/dashboard/${qdflash}/${qb}/${parmDate}`);

      //       setQualityDashFlash(responseQone.data.data.data.flash);

      //       const responseQtwo = await apiThree.get(`/dashboard/${qdftr}/${qb}/${parmDate}`);

      //        setQualityDashFtr(responseQtwo.data.data.data.ftr)

      //        const responseQthree = await apiThree.get(`/dashboard/${qdb}/${qb}/${parmDate}`);

      //        setQualityDashB(responseQthree.data.data.data.b)

      //       const responseQfour = await apiThree.get(`/dashboard/${qde}/${qb}/${parmDate}`);

      //       setQualityDashE(responseQfour.data.data.data.ea)

      //      const responseQfive = await apiThree.get(`/dashboard/${qdr}/${qb}/${parmDate}`);

      //        setQualityR(responseQfive.data.data.data.r)

      //        const responseQsix = await apiThree.get(`/dashboard/${qdl}/${qb}/${parmDate}`);

      //        setQualityL(responseQsix.data.data.data.l)

      //        const responseQseven = await apiThree.get(`/dashboard/${qdc}/${qb}/${parmDate}`);

      //      setQualityC(responseQseven.data.data.data.c)

      //       const responseQeight = await apiThree.get(`/dashboard/${qdnm}/${qb}/${parmDate}`);

      //       setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires)

      //        const responseQnine = await apiThree.get(`/dashboard/${qdberlc}/${qb}/${parmDate}`);

      //       setQualityDashBerlc(responseQnine.data.data.data.berlc)

      // // //////Mixing////////////////
      //  const responseMone = await apiThree.get(`/dashboard/${mdwa}/${mb}/${parmDate}`);

      //        setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual)

      //       const responseMtwo = await apiThree.get(`/dashboard/${mdwp}/${mb}/${parmDate}`);

      //       setMixingDashTonnagePlan(responseMtwo.data.data.data.compound_weight_plan)

      //       const responseMthree = await apiThree.get(`/dashboard/${mdbd}/${mb}/${parmDate}`);

      //      setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down)

      //       const responseMfour = await apiThree.get(`/dashboard/${mdp}/${mb}/${parmDate}`);

      //        setMixingDashProductivity(responseMfour.data.data.data.mixing_productivity)

      //        const responseMfive = await apiThree.get(`/dashboard/${mde}/${mb}/${parmDate}`);

      //        setMixingDashEnergy(responseMfive.data.data.data.mixing_energy)

      // // /////////////////////////////eng///////////////////

      //  const responseEone = await apiThree.get(`/dashboard/${edeck}/${eb}/${parmDate}`);

      //        setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg)

      //        const responseEtwo= await apiThree.get(`/dashboard/${edec}/${eb}/${parmDate}`);

      //        setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed)

      //        const responseEthree = await apiThree.get(`/dashboard/${edb}/${eb}/${parmDate}`);

      //        setENGDashBreakDown(responseEthree.data.data.data.break_down)

      //        const responseEfive = await apiThree.get(`/dashboard/${edfcr}/${eb}/${parmDate}`);

      //       setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate)

      // console.log(engDashFuelRate);
      // //       ///////////////////////////////hr

      //        const responseHone = await apiThree.get(`/dashboard/${hdai}/${hb}/${parmDate}`);

      //        setHRDashAI(responseHone.data.data.data.absent_inform)

      //        const responseHtwo = await apiThree.get(`/dashboard/${hdani}/${hb}/${parmDate}`);

      //       setHRDashANI(responseHtwo.data.data.data.absent_non_inform)

      //        const responseHthree = await apiThree.get(`/dashboard/${hddot}/${hb}/${parmDate}`);

      //        setHRDashDot(responseHthree.data.data.data.dot)

      //        const responseHfour = await apiThree.get(`/dashboard/${hdra}/${hb}/${parmDate}`);

      //        setHRDashRA(responseHfour.data.data.data.reportable_accident)

      //        const responseHfive = await apiThree.get(`/dashboard/${hdnra}/${hb}/${parmDate}`);

      //        setHRDashNRC(responseHfive.data.data.data.non_reportable_accident)

      //        const responseHsix = await apiThree.get(`/dashboard/${hdnm}/${hb}/${parmDate}`);

      //        setHRDashNearMis(responseHsix.data.data.data.near_miss)

      //       const responseHseven = await apiThree.get(`/dashboard/${hdk}/${hb}/${parmDate}`);

      //       setHRDashKaizen(responseHseven.data.data.data.kaizen)

      //       const responseHeight = await apiThree.get(`/dashboard/${hdm}/${hb}/${parmDate}`);

      //       setHRDashManpower(responseHeight.data.data.data.man_power)

      // //       /////////////////////BEAD

      //       const responseBone = await apiThree.get(`/dashboard/${bdcba}/${bb}/${parmDate}`);

      //       setBeadDashBead(responseBone.data.data.data.creel_bead_actual)

      //        const responseBtwo = await apiThree.get(`/dashboard/${bdcbp}/${bb}/${parmDate}`);

      //       setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan)

      //        const responseBthree= await apiThree.get(`/dashboard/${bdrb}/${bb}/${parmDate}`);

      //       setBeadDashRejectBead(responseBthree.data.data.data.reject_bead)

      //        const responseBfour= await apiThree.get(`/dashboard/${bdbd}/${bb}/${parmDate}`);

      //        setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown)

      // //       /////////////////HOLD///////////

      //        const responseHoone= await apiThree.get(`/dashboard/${hdhc}/${hob}/${parmDate}`);

      //        setQualityDashHold(responseHoone.data.data.data.hold_compound)

      //        const responseHotwo= await apiThree.get(`/dashboard/${hdrc}/${hob}/${parmDate}`);

      //        setQualityDashRejectCompound(responseHotwo.data.data.data.reject_compound)

      // console.log(responseHone);
    } catch (err) {
      console.log(err);
    }
  };

  ///mtd////////////

  const fetchDataMtd = async () => {
    try {
      const response = await api.get(
        `/reporting/piechart/sum/actual_weight/production_data/${paramDateOne}/${parmDate}`
      );

      setProductionMtd(response.data.data.data[0].total);

      /////////////////////////////

      const responsePone = await api.get(
        `/reporting/piechart/avg/plan_adherence/production_data/${paramDateOne}/${parmDate}`
      );

      setProductionAdherenceMtd(responsePone.data.data.data[0].total);

      const responsePtwo = await api.get(
        `/reporting/piechart/avg/plant_utilization/production_data/${paramDateOne}/${parmDate}`
      );

      setProductionUtilizationMtd(responsePtwo.data.data.data[0].total);

      const responseThree = await api.get(
        `/reporting/piechart/avg/productivity/production_data/${paramDateOne}/${parmDate}`
      );

      setProductionDashProductivityMtd(responseThree.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  //////////////////////////

  const fetchDataQuality = async () => {
    try {
      //       ///////////////////////////////////////////////////Qulaity

      const responseQone = await apiThree.get(
        `/dashboard/${qdflash}/${qb}/${parmDate}`
      );

      setQualityDashFlash(responseQone.data.data.data.flash);

      const responseQtwo = await apiThree.get(
        `/dashboard/${qdftr}/${qb}/${parmDate}`
      );

      setQualityDashFtr(responseQtwo.data.data.data.ftr);

      const responseQnine = await apiThree.get(
        `/dashboard/${qdberlc}/${qb}/${parmDate}`
      );

      setQualityDashBerlc(responseQnine.data.data.data.berlc);
      console.log(responseQnine.data.data.data.berlc);
      ///////// pramod
      const responseQnine1 = await apiThree.get(`/getoneRowfgs/${parmDate}`);

      console.log("mvfskn");
      console.log(responseQnine1.data.data.data.fgs_invert);

      ////////////////////////////
      const responseQthree = await apiThree.get(
        `/dashboard/${qdb}/${qb}/${parmDate}`
      );

      setQualityDashB(responseQthree.data.data.data.b);

      const responseQfour = await apiThree.get(
        `/dashboard/${qde}/${qb}/${parmDate}`
      );

      setQualityDashE(responseQfour.data.data.data.ea);

      const responseQfive = await apiThree.get(
        `/dashboard/${qdr}/${qb}/${parmDate}`
      );

      setQualityR(responseQfive.data.data.data.r);

      const responseQsix = await apiThree.get(
        `/dashboard/${qdl}/${qb}/${parmDate}`
      );

      setQualityL(responseQsix.data.data.data.l);

      const responseQseven = await apiThree.get(
        `/dashboard/${qdc}/${qb}/${parmDate}`
      );

      setQualityC(responseQseven.data.data.data.c);

      const responseQeight = await apiThree.get(
        `/dashboard/${qdnm}/${qb}/${parmDate}`
      );

      setQualityDashNM(responseQeight.data.data.data.nm_dirty_tires);
    } catch (err) {
      console.log(err);
    }
  };

  ///////////////////

  const fetchDataQualityMtd = async () => {
    try {
      //       ///////////////////////////////////////////////////Qulaity

      const responseQone = await api.get(
        `/reporting/piechart/avg/flash/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashFlashMtd(responseQone.data.data.data[0].total);

      const responseQtwo = await api.get(
        `/reporting/piechart/avg/ftr/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashFtrMtd(responseQtwo.data.data.data[0].total);

      const responseQnine = await api.get(
        `/reporting/piechart/avg/berlc/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashBerlcMtd(responseQnine.data.data.data[0].total);

      const responseQthree = await api.get(
        `/reporting/piechart/avg/b/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashBMtd(responseQthree.data.data.data[0].total);

      const responseQfour = await api.get(
        `/reporting/piechart/avg/ea/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashEMtd(responseQfour.data.data.data[0].total);

      const responseQfive = await api.get(
        `/reporting/piechart/avg/r/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityRMtd(responseQfive.data.data.data[0].total);

      const responseQsix = await api.get(
        `/reporting/piechart/avg/l/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityLMtd(responseQsix.data.data.data[0].total);

      const responseQseven = await api.get(
        `/reporting/piechart/avg/c/quality_data/${paramDateOne}/${parmDate}`
      );

      setQualityCMtd(responseQseven.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  /////////////////

  const fetchDataMixing = async () => {
    try {
      // //////Mixing////////////////
      const responseMone = await apiThree.get(
        `/dashboard/${mdwa}/${mb}/${parmDate}`
      );

      setMixingDashTonnage(responseMone.data.data.data.compound_weight_actual);
      console.log(mixingDashTonnage);

      const responseMtwo = await apiThree.get(
        `/dashboard/${mdwp}/${mb}/${parmDate}`
      );

      setMixingDashTonnagePlan(
        responseMtwo.data.data.data.compound_weight_plan
      );

      const responseMthree = await apiThree.get(
        `/dashboard/${mdbd}/${mb}/${parmDate}`
      );

      setMixingDashBreakDown(responseMthree.data.data.data.mixing_break_down);

      const responseMfour = await apiThree.get(
        `/dashboard/${mdp}/${mb}/${parmDate}`
      );

      setMixingDashProductivity(
        responseMfour.data.data.data.mixing_productivity
      );

      const responseMfive = await apiThree.get(
        `/dashboard/${mde}/${mb}/${parmDate}`
      );

      setMixingDashEnergy(responseMfive.data.data.data.mixing_energy);
    } catch (err) {
      console.log(err);
    }
  };

  /////////////////////////

  const fetchDataMixingMtd = async () => {
    try {
      // //////Mixing////////////////
      const responseMone = await api.get(
        `/reporting/piechart/sum/compound_weight_actual/mixing_data/${paramDateOne}/${parmDate}`
      );

      setMixingDashTonnageMtd(responseMone.data.data.data[0].total);
      console.log(responseMone.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  /////////////////////////

  const fetchDataEng = async () => {
    try {
      // /////////////////////////////eng///////////////////

      const responseEone = await apiThree.get(
        `/dashboard/${edeck}/${eb}/${parmDate}`
      );

      setENGDashEnergyCostRate(responseEone.data.data.data.energy_cost_kg);

      const responseEtwo = await apiThree.get(
        `/dashboard/${edec}/${eb}/${parmDate}`
      );

      setENGDashPowerConsumption(responseEtwo.data.data.data.energy_consumed);

      const responseEthree = await apiThree.get(
        `/dashboard/${edb}/${eb}/${parmDate}`
      );

      setENGDashBreakDown(responseEthree.data.data.data.break_down);

      const responseEfive = await apiThree.get(
        `/dashboard/${edfcr}/${eb}/${parmDate}`
      );

      setENGDashFuelRate(responseEfive.data.data.data.firewood_cost_rate);
    } catch (err) {
      console.log(err);
    }
  };

  ///////////////////////////////

  const fetchDataEngMtd = async () => {
    try {
      // /////////////////////////////eng///////////////////

      const responseEtwo = await api.get(
        `/reporting/piechart/avg/energy_consumed/eng_data/${paramDateOne}/${parmDate}`
      );

      setENGDashPowerConsumptionMtd(responseEtwo.data.data.data[0].total);

      const responseEthree = await api.get(
        `/reporting/piechart/sum/break_down/eng_data/${paramDateOne}/${parmDate}`
      );

      setENGDashBreakDownMtd(responseEthree.data.data.data[0].total);

      const responseEfive = await api.get(
        `/reporting/piechart/avg/firewood_cost_rate/eng_data/${paramDateOne}/${parmDate}`
      );

      setENGDashFuelRateMtd(responseEfive.data.data.data[0].total);

      const responseEone = await api.get(
        `/reporting/piechart/avg/energy_cost_kg/eng_data/${paramDateOne}/${parmDate}`
      );

      setengDashEnergyCostRateMtd(responseEone.data.data.data[0].total);

      console.log(engDashEnergyCostRateMtd);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////////////////////////

  const fetchDataHold = async () => {
    try {
      //       /////////////////HOLD///////////

      const responseHoone = await apiThree.get(
        `/dashboard/${hdhc}/${hob}/${parmDate}`
      );

      setQualityDashHold(responseHoone.data.data.data.hold_compound);

      const responseHotwo = await apiThree.get(
        `/dashboard/${hdrc}/${hob}/${parmDate}`
      );

      setQualityDashRejectCompound(
        responseHotwo.data.data.data.reject_compound
      );

      console.log(qualityDashHold);

      ////////////

      ////////////////
    } catch (err) {
      console.log(err);
    }
  };

  //////////////////

  const fetchDataHoldMtd = async () => {
    try {
      //       /////////////////HOLDmtdd///////////

      const responseHoone = await api.get(
        `/reporting/piechart/sum/hold_compound/hold_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashHoldMtd(responseHoone.data.data.data[0].total);
      console.log(qualityDashHoldMtd);

      const responseHotwo = await api.get(
        `/reporting/piechart/sum/reject_compound/hold_data/${paramDateOne}/${parmDate}`
      );

      setQualityDashRejectCompoundMtd(responseHotwo.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataBead = async () => {
    try {
      //       /////////////////////BEAD

      const responseBone = await apiThree.get(
        `/dashboard/${bdcba}/${bb}/${parmDate}`
      );

      setBeadDashBead(responseBone.data.data.data.creel_bead_actual);

      const responseBtwo = await apiThree.get(
        `/dashboard/${bdcbp}/${bb}/${parmDate}`
      );

      setBeadDashBeadPlan(responseBtwo.data.data.data.creel_bead_plan);

      const responseBthree = await apiThree.get(
        `/dashboard/${bdrb}/${bb}/${parmDate}`
      );

      setBeadDashRejectBead(responseBthree.data.data.data.reject_bead);

      const responseBfour = await apiThree.get(
        `/dashboard/${bdbd}/${bb}/${parmDate}`
      );

      setBeadDashBreakDown(responseBfour.data.data.data.bead_breakdown);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataHr = async () => {
    try {
      //       ///////////////////////////////hr

      const responseHone = await apiThree.get(
        `/dashboard/${hdai}/${hb}/${parmDate}`
      );

      setHRDashAI(responseHone.data.data.data.absent_inform);

      const responseHtwo = await apiThree.get(
        `/dashboard/${hdani}/${hb}/${parmDate}`
      );

      setHRDashANI(responseHtwo.data.data.data.absent_non_inform);

      const responseHthree = await apiThree.get(
        `/dashboard/${hddot}/${hb}/${parmDate}`
      );

      setHRDashDot(responseHthree.data.data.data.dot);

      const responseHfour = await apiThree.get(
        `/dashboard/${hdra}/${hb}/${parmDate}`
      );

      setHRDashRA(responseHfour.data.data.data.reportable_accident);

      const responseHfive = await apiThree.get(
        `/dashboard/${hdnra}/${hb}/${parmDate}`
      );

      setHRDashNRC(responseHfive.data.data.data.non_reportable_accident);

      const responseHsix = await apiThree.get(
        `/dashboard/${hdnm}/${hb}/${parmDate}`
      );

      setHRDashNearMis(responseHsix.data.data.data.near_miss);

      const responseHseven = await apiThree.get(
        `/dashboard/${hdk}/${hb}/${parmDate}`
      );

      setHRDashKaizen(responseHseven.data.data.data.kaizen);

      const responseHeight = await apiThree.get(
        `/dashboard/${hdm}/${hb}/${parmDate}`
      );

      setHRDashManpower(responseHeight.data.data.data.man_power);

      console.log(responseHeight.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////////////////

  const fetchDataHrMtd = async () => {
    try {
      //       ///////////////////////////////hr

      const responseHone = await api.get(
        `/reporting/piechart/sum/absent_inform/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashAIMtd(responseHone.data.data.data[0].total);

      const responseHtwo = await api.get(
        `/reporting/piechart/sum/absent_non_inform/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashANIMtd(responseHtwo.data.data.data[0].total);

      const responseHthree = await api.get(
        `/reporting/piechart/sum/dot/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashDotMtd(responseHthree.data.data.data[0].total);

      const responseHfour = await api.get(
        `/reporting/piechart/sum/reportable_accident/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashRAMtd(responseHfour.data.data.data[0].total);

      const responseHfive = await api.get(
        `/reporting/piechart/sum/non_reportable_accident/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashNRCMtd(responseHfive.data.data.data[0].total);

      const responseHsix = await api.get(
        `/reporting/piechart/sum/near_miss/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashNearMisMtd(responseHsix.data.data.data[0].total);

      const responseHseven = await api.get(
        `/reporting/piechart/sum/kaizen/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashKaizenMtd(responseHseven.data.data.data[0].total);

      const responseHeight = await api.get(
        `/reporting/piechart/avg/man_power/hr_data/${paramDateOne}/${parmDate}`
      );

      setHRDashManpowerMtd(responseHeight.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////fgs pramod
  /*
const fetchDataFgs = async () => {
    
  try {

    
//       /////////////////fgs///////////

const responseQnine1 = await apiThree.get(`/getoneRowfgs/${parmDate}`);
 console.log(responseQnine1.data.data.data.fgs_invert)
     setMfgTireinvert(responseQnine1.data.data.data.fgs_invert)
      
  } catch (err) {
    console.log(err);
  }
};
////////////// Tire Invert Actual
*/
  //const TireInverdActual = async () => {

  // try {

  //  const responseQnine2 = await apiThree.get(`/getcount/tirestock/${paramDateOne}/${parmDate}`);
  // console.log(responseQnine2.data.data.restaurants[0].count)
  // setTireInverdactual(responseQnine2.data.data.restaurants[0].count)
  //} catch (err) {
  // console.log(err);
  //}
  //};
  //////////////////////// /////////////////fgs pramod

  const TireInverdActual = async () => {
    try {
      /////////////
      const tireStockAcuracyTarget = await apiThree.get(
        `/tirestockAcuracy/target/${paramDateOne}/${parmDate}`
      );
      setTireStkAcuuracyTar(
        tireStockAcuracyTarget.data.data.restaurants[0].count
      );

      /////////

      const responseQnine2 = await apiThree.get(
        `/getcount/tirestock/${paramDateOne}/${parmDate}`
      );

      if (responseQnine2.data.data.restaurants[0].count.length > 0) {
        setTireInverdactual(responseQnine2.data.data.restaurants[0].count);
      } else {
        setTireInverdactual(null);
      }

      const responseQnine1 = await apiThree.get(`/getoneRowfgs/${parmDate}`);

      console.log(responseQnine1.data.data.data);

      if (responseQnine1.data.data.data.length === 0) {
        setMfgTireinvert("No Data");
        setDailypdi("No Data");
        setShipment("No Data")
        //setShipmentplan("No Data")
        setShipment2("No Data")
        setFgsActual("No Data")

      } else {
        setMfgTireinvert(responseQnine1.data.data.data[0].fgs_invert);
        setDailypdi(responseQnine1.data.data.data[0].daily_pdi);
        setShipment(responseQnine1.data.data.data[0].shipment_dispatch);
        //setShipmentplan(responseQnine1.data.data.data[0].shipment_plan/30);
        setShipment2(responseQnine1.data.data.data[0].shipment_plan)
        setFgsActual(responseQnine1.data.data.data[0].actual_stock)
        console.log(responseQnine1.data.data.data[0].actual_stock)
      }

      
    } catch (err) {
      console.log(err);
    }
  };

  //  shipmentplan
  const shipmentplan1 = async () => {
    try {
      const response1 = await apiThree.get(
        `/getoneshipmentPlan/${parmDate}`
      );
      console.log(response1.data.rows[0].shipment_plan)

      if (response1.data.data.data[0].shipment_plan===null){
      setShipmentplan(0.0)
      
      }
      else {
        setShipmentplan(response1.data.data.data[0].shipment_plan/30)
        console.log(response1.data.data.data[0].shipment_plan)
      }

      
    } catch (err) {
      console.log(err);
    }
  };

  

  const fgsAccuracyMTD1 = async () => {
    try {
      const response1 = await api.get(
        `/reporting/piechart/sum/actual_stock/fgs_accuracy/${paramDateOne}/${parmDate}`
      );

      setFgsAccuracMTD1(response1.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  const dailyPdiMtd = async () => {
    try {
      const response1 = await api.get(
        `/reporting/piechart/sum/daily_pdi/fgs_accuracy/${paramDateOne}/${parmDate}`
      );
      setDailyPdIMTD(response1.data.data.data[0].total);
      const response2 = await api.get(
        `/reporting/piechart/sum/shipment_dispatch/fgs_accuracy/${paramDateOne}/${parmDate}`
      );
      setShipmentIMTD(response2.data.data.data[0].total)

      const response3 = await api.get(
        `/reporting/piechart/sum/fgs_invert/fgs_accuracy/${paramDateOne}/${parmDate}`
      );
      settireInveredMTD(response3.data.data.data[0].total)
    } catch (err) {
      console.log(err);
    }
  };

  /////////////// shot Blast

  const shotblasting = async () => {
    try {
      const shotblast1 = await api.get(
        `/reporting/getshotBlastingForDash/${parmDate}`
      );
      if (shotblast1.data.data.data.length === 0) {
        setShotblast1("No Data");
      } else {
        setShotblast1(shotblast1.data.data.data[0].m1_plan);
        setShotblast2(shotblast1.data.data.data[0]);
        //setShotblast2(shotblast1.data.data.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const shotblastingMTD1 = async () => {
    try {
      const response1 = await api.get(
        `/reporting/piechart/sum/m1_actual/shot_blasting/${paramDateOne}/${parmDate}`
      );
      setShotblastmtd1(response1.data.data.data[0].total);
      const response2 = await api.get(
        `/reporting/piechart/sum/m2_actual/shot_blasting/${paramDateOne}/${parmDate}`
      );
      setShotblastmtd2(response2.data.data.data[0].total);
    } catch (err) {
      console.log(err);
    }
  };
//  tire inverd  mtd
  
  useEffect(() => {
    fetchData();
    fetchDataQuality();
    fetchDataMixing();
    fetchDataMixingMtd();
    fetchDataEng();
    fetchDataEngMtd();
    fetchDataBead();
    fetchDataHr();
    fetchDataHrMtd();
    fetchDataHold();
    fetchDataMtd();
    fetchDataQualityMtd();
    fetchDataHoldMtd();
    // fetchDataFgs()
    TireInverdActual();
    shotblasting();
    shotblastingMTD1();
    fgsAccuracyMTD1();
    dailyPdiMtd();
    shipmentplan1();
    
  }, [
    parmDate,
    pda,
    pdp,
    pdadherence,
    qdflash,
    mdwa,
    edeck,
    hdm,
    bdcba,
    hdhc,
    setMfgTireinvert,
  ]);

  //console.log(productionDashData);
  let one = productionDashActual >= productionDashPlan;
  let two = productionDashAdherence >= 90;
  let three = productionDashUtilization >= 90;
  let four = qualityDashFtr >= 90;
  let five = qualityDashBerlc >= 0.3;
  let six = qualityDashB >= 0.15;
  let seven = qualityDashE > 0;
  const eight = qualityR >= 0.15;
  //let nine = qualityDash >= 0.03
  //let ten= qualityDashBerlc >= 0.03
  let eleven = qualityDashFlash >= 1.2;
  let twelve = qualityDashHold > 0;
  let thirteen = qualityDashRejectCompound > 0;

  let fourteen = mixingDashTonnage >= mixingDashTonnagePlan;
  let fifteen = mixingDashProductivity >= 0;
  let sixteen = mixingDashBreakDown > 0;

  let seventeen = engDashBreakDown >= 6.67;
  let eighteen = engDashFuelRate >= 5.6;
  let nineteen = engDashFuelConsumption >= 950;
  let twenty = engDashEnergyCostRate >= 5.25;
  let twentyone = engDashPowerConsumption >= 370;

  let twentytwo = hrDashNearMiss >= 1;
  let twentythree = hrDashKaizen >= 1;
  let twentyfour = hrDashNRC > 0;
  let twentyfive = hrDashRA > 0;
  let twentysix = hrDashdOT > 0;
  let twentyseven = hrDashAI > 0;
  let twentyeight = hrDashANI > 0;
  let twentynine = hrDashManpower > 45;

  let thirty = beadDashBead >= beadDashBeadPlan;
  let thirtyone = beadDashRejectBead >= 0;
  //let thirtytwo = beadDashr >= 1
  let thirtythree = beadDashEnergy >= 0;
  let thirtyfour = beadDashBreakDown > 0;
  //let thirtyfive = beadDashBead >= 1

  // pramod fgs Accuracy 
  let colorFgs1 =  mfgTireinvert <= tireInverdactual;
  let colorFgs2 = shipmentplan  >= dailypdi;

  return (
    <div className="maind">
      <div className="dp">
        <div className="row b ">
          <div className="col-md-3 col-sm-3 col-lg-3">
            <img className="sun" src={logo} />
          </div>
          <div className="col-md-9 col-sm-9 col-lg-9 d-flex">
            <h4 className="htwo "> SLTL OPERATIONAL DASHBOARD</h4>{" "}
            <Button
              size="small"
              endIcon={<LibraryBooksIcon />}
              variant="text"
              className="momdpr"
              onClick={(e) => {
                e.preventDefault();

                navigate("/momdpr");
              }}
            ></Button>
          </div>
        </div>
      </div>

      {/* <div className='dpone'>


<div className='row  '>
   <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

     DIVISION
         </div>

         <div className='col-md-3 col-sm-3 col-lg-3  text-center'>

INDICATOR
   </div> 

   <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

UOM
   </div>
   <div className='col-md-1 col-sm-1col-lg-1 text-center'>

      TARGET
         </div> 
         <div className='col-md-2 col-sm-2 col-lg-2 text-center'>

      ACTUAL
         </div> 
         <div className='col-md-1 col-sm-1 col-lg-1 text-start'>

     RESP
         </div>  
         <div className='col-md-1 col-sm-1 col-lg-1 text-start'>

RCCM
    </div>  
</div>  
         
      
      </div> */}

      <div className="thm x">
        <div className="row dhead bo x">
          <div className="col-md-12 col-sm-12 col-lg-12 text-center x ">
            <table
              className="table  table-bordered table-hover mb-0  x"
              style={{ position: "sticky", zIndex: "1000" }}
            >
              <thead className="thead-dark x">
                <tr>
                  <th scope="col-md-2 col-sm-2 col-lg-2" width="14%">
                    {" "}
                    DIVISION
                  </th>
                  <th scope="col-md-2 col-sm-2 col-lg-2" width="15%">
                    INDICATOR
                  </th>
                  <th scope="col-md-2 col-sm-2 col-lg-2" width="8%">
                    UOM
                  </th>
                  <th scope="col-md-1 col-sm-1 col-lg-1" width="8%">
                    TARGET
                  </th>
                  <th scope="col-md-1 col-sm-1 col-lg-1" width="8%">
                    ACTUAL
                  </th>
                  <th scope="col-md-1 col-sm-1 col-lg-1" width="10%">
                    MTD
                  </th>
                  <th scope="col-md-1 col-sm-1 col-lg-1">RESP</th>
                  <th scope="col-md-1 col-sm-1 col-lg-1" width="12%">
                    HOD
                  </th>
                  <th scope="col-md-1 col-sm-1 col-lg-1" width="1%">
                    RCCM
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="3" width="14%">
                  <div className="division mt-3">Production</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Actual Production
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Ton
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {productionDashPlan}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    one
                      ? {
                          backgroundColor: "green",
                          fontWeight: "bold",
                          color: "white",
                          fontSize: "12px",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                          fontSize: "12px",
                        }
                  }
                >
                  {productionDashActual}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {productionMtd && productionMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Akalanka
                </td>
                <td
                  width="12%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "plan_vs_actual" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Production Adherence
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>90%</td>
                <td
                  className="acc"
                  style={
                    two
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {productionDashAdherence}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {productionAdherenceMtd && productionAdherenceMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "plan_adherence" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Plant Utilization
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>90%</td>
                <td
                  className="acc"
                  style={
                    three
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {productionDashUtilization}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {productionUtilizationMtd &&
                    productionUtilizationMtd.toFixed(2)}
                  %
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "plant_utilization" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo ">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="8" width="14%">
                  <div className="division ">Quality</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  FTR
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  %
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  90%
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    four
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashFtr}%
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashFtrMtd && qualityDashFtrMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td
                  width="12%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Mr.Saman
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "ftr" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>BERLC</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0.3%</td>
                <td
                  className="acc"
                  style={
                    five
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashBerlc}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashBerlcMtd && qualityDashBerlcMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "berlc" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>B</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0.15%</td>
                <td
                  className="acc"
                  style={
                    six
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashB}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashBMtd && qualityDashBMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "berlc" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>E</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    seven
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashE}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashEMtd && qualityDashEMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "berlc" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>R</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0.15%</td>
                <td
                  className="acc"
                  style={
                    eight
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityR}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityRMtd && qualityRMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "berlc" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Flash Rate
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>%</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>1.2%</td>
                <td
                  className="acc"
                  style={
                    eleven
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashFlash}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashFlashMtd && qualityDashFlashMtd.toFixed(2)}%
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dulan
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "flash" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Reject Compound
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kg</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    thirteen
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashRejectCompound}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashRejectCompoundMtd &&
                    qualityDashRejectCompoundMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Hasula
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "rejectCompound" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Hold Compound
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kg</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twelve
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {qualityDashHold}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {qualityDashHoldMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Hasula
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Saman
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "holdCompound" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="3" width="14%">
                  <div className="division mt-3">Mixing</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Mixing Tonnage
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Kg
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {mixingDashTonnagePlan}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    fourteen
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {mixingDashTonnage}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {mixingDashTonnageMtd && mixingDashTonnageMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dinesh
                </td>
                <td
                  width="12%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "compoundWeight" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mixing Productivity
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kg/Man</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td
                  className="acc"
                  style={
                    fifteen
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {mixingDashProductivity}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dinesh
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "mixingProductivity" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mixing BreakDowns
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kg</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    sixteen
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {mixingDashBreakDown}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dinesh
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "mixingBreakDown" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="4" width="14%">
                  <div className="division mt-5">ENG</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Machine BreakDowns
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  hrs
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  6.67/200
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    seventeen
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {engDashBreakDown}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {engDashBreakDownMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {" "}
                  Mr.Vidusanka
                </td>
                <td
                  width="12%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {" "}
                  Mr.Manoj
                </td>
                <td width="1%">
                  {" "}
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "breakdown" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Fuel Cost/Kg of Tyre
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Lkr/Kg</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>5.6</td>
                <td
                  className="acc"
                  style={
                    eighteen
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {engDashFuelRate}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {engDashFuelRateMtd && engDashFuelRateMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Vidusanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {" "}
                  Mr.Suminda
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "fireWoodCostRate" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Energy Cost/Kg of Tyre
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Lkr/Kg</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>5.25</td>
                <td
                  className="acc"
                  style={
                    twenty
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {engDashEnergyCostRate}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {engDashEnergyCostRateMtd &&
                    engDashEnergyCostRateMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Vidusanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {" "}
                  Mr.Suminda
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "energyCost" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Power Consumption
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kwh/MT</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>370</td>
                <td
                  className="acc"
                  style={
                    twentyone
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {engDashPowerConsumption}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {engDashPowerConsumptionMtd &&
                    engDashPowerConsumptionMtd.toFixed(0)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Vidusanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {" "}
                  Mr.Suminda
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "energyCost" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="8" width="14%">
                  <div className="division">HR & Safety</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Near Miss
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  nos
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  1
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    twentytwo
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashNearMiss}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashNearMissMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "nearMiss" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Kaizen</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>1</td>
                <td
                  className="acc"
                  style={
                    twentythree
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashKaizen}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashKaizenMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "kaizen" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>NRA</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twentyfour
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashNRC}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashNRCMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "nonReportableAccident" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>RA</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twentyfive
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashRA}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashRAMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "reportableAccident" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>DOT</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twentysix
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashdOT}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashdOTMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "dot" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Absent Inform
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twentyseven
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashAI}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashAIMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "absentInform" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Absent Non Inform
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    twentyeight
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashANI}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashANIMtd}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "absentNonInform" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Man Power
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>45</td>
                <td
                  className="acc"
                  style={
                    twentynine
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {hrDashManpower}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {hrDashManpowerMtd && hrDashManpowerMtd.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Malinda/Indika
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Rohitha
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "manPower" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="4" width="14%">
                  <div className="division mt-4">Bead</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  No of Bead
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  nos
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {beadDashBeadPlan}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    thirty
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashBead}
                </td>
                <td
                  width="9%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                ></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "creelBead" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Reject Bead
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    thirtyone
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashRejectBead}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "rejectBead" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>Energy</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td
                  className="acc"
                  style={
                    thirtythree
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashEnergy}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "beadEnergy" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Break Down
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>hrs</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    thirtyfour
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashBreakDown}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "beadBreakDown" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      {/* planning */}

      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="4" width="14%">
                  <div className="division mt-4">planning</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Number of Tire
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  nos
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {beadDashBeadPlan}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    thirty
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashBead}
                </td>
                <td
                  width="9%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                ></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "creelBead" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>WIP</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    thirtyone
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashRejectBead}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "rejectBead" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>FTNR</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td
                  className="acc"
                  style={
                    thirtythree
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashEnergy}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "beadEnergy" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>FTR</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>hrs</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>0</td>
                <td
                  className="acc"
                  style={
                    thirtyfour
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {beadDashBreakDown}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}></td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Janaka/Akalanka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "beadBreakDown" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table"></table>
        </div>
      </div>

      {/* FGS acuraccy */}
      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="5" width="14%">
                  <div className="division mt-4">Fgs Accuracy</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Tire stock Accuracy
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  nos
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {tireStkAcuuracyTar}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    thirty
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {fgsActual}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {fgsAccuracMTD1 && fgsAccuracMTD1.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Tire Inverd
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {tireInverdactual}
                </td>
                <td
                  className="acc"
                  style={
                    colorFgs1
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {mfgTireinvert}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {tireInveredMTD && tireInveredMTD.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Tire Pdi
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>{shipmentplan && shipmentplan.toFixed(2)}</td>
                <td
                  className="acc"
                  style={
                    colorFgs2
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {dailypdi}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {dailyPdIMTD}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Shipment
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>{shipment2}</td>
                <td
                  className="acc"
                  style={
                    thirtyfour
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {shipment}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>{shipmentIMTD }</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "ship_ment" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table"></table>
        </div>
      </div>
      {/* shot Blasting       ------*/}
      <div className="row mr-1 ml-1 mt-2 bo">
        <div className="col-md-12 col-sm-12 col-lg-12 text-center ">
          <table className="table  table-bordered table-hover ttt">
            <tbody>
              <tr>
                <td rowspan="5" width="14%">
                  <div className="division mt-4">Shot Blasting & Band</div>
                </td>
                <td
                  width="15%"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Shot Blasting Vs Actual M1
                </td>
                <td width="8%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  nos
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblast1}
                </td>
                <td
                  className="acc"
                  width="9%"
                  style={
                    thirty
                      ? {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {shotblast2.m1_actual}
                </td>
                <td width="9%" style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblastmtd1 && shotblastmtd1.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td width="1%">
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "shot_blasting vs actual m1" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Shot Blasting Vs Actual M2
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblast2.m2_plan}
                </td>
                <td
                  className="acc"
                  style={
                    thirtyone
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {shotblast2.m2_actual}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblastmtd2 && shotblastmtd2.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "shot_blasting vs actual m2" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Band room
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>nos</td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblast2.m2_plan}
                </td>
                <td
                  className="acc"
                  style={
                    thirtyone
                      ? {
                          backgroundColor: "red",
                          fontWeight: 900,
                          color: "white",
                        }
                      : {
                          backgroundColor: "green",
                          fontWeight: 900,
                          color: "white",
                        }
                  }
                >
                  {shotblast2.m2_actual}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  {shotblastmtd2 && shotblastmtd2.toFixed(2)}
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhanuka
                </td>
                <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Mr.Dhammika
                </td>
                <td>
                  <Button
                    size="small"
                    endIcon={<ArrowRightIcon />}
                    variant="text"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "shot_blasting vs actual m2" });
                      navigate("/daily");
                    }}
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table"></table>
        </div>
      </div>
    </div>
  );
};

export default Dpr;
