import React,{createContext,useState,useReducer} from 'react'


const initialState = {firstKpi:'actual_weight',secondKpi:'plan_weight',condition:'sum',division:'production_data',divrccm: 'production_rccm',titleOne:'Actual Weight(Ton)',titleTwo:'Plan Weight(Ton)'}

const reducer =(state,action)=>{
    switch(action.type){
        case 'plant_utilization':
        return{firstKpi: 'plant_utilization',secondKpi:'plant_utilization_plan',condition:'avg',division:'production_data',division:'production_data',divrccm: 'production_rccm',titleOne:'Plant Utilization(%)',titleTwo:'Plan (%)'}
        case 'plan_adherence':
        return {firstKpi: 'plan_adherence',secondKpi:'plan_adherence_plan',condition:'avg',division:'production_data',division:'production_data',divrccm: 'production_rccm',titleOne:'Plan Adhernce(%)',titleTwo:'Plan(%)'}
        case 'plan_vs_actual':
        return{firstKpi: 'actual_weight',secondKpi:'plan_weight',condition:'sum',division:'production_data',division:'production_data',divrccm: 'production_rccm',titleOne:'Actual Weight(Ton)',titleTwo:'Plan Weight(Ton)'}
        case 'productivity':
        return {firstKpi: 'productivity',secondKpi:'productivity_plan',condition:'avg',division:'production_data',division:'production_data',divrccm: 'production_rccm',titleOne:'Production Productivity(Kg/mhr)',titleTwo:'Plan (Kg/mhr)'}
        case 'ftr':
                return {firstKpi:'ftr',secondKpi:'ftr_plan',condition:'avg',division:'quality_data',divrccm:'quality_rccm',titleOne:'FTR (%)',titleTwo:'Plan (%)'}
        case 'flash':
            return{firstKpi: 'flash',secondKpi:'flash_plan',condition:'avg',division:'quality_data',divrccm:'quality_rccm',titleOne:'Flash (%)',titleTwo:'Plan (%)'}
        case 'berlc':
            return {firstKpi:'berlc',secondKpi:'berlc_plan',condition:'avg',division:'quality_data',divrccm:'quality_rccm',titleOne:'BERLC (%)',titleTwo:'Plan (%)'}
            case 'holdCompound':
            return{firstKpi: 'hold_compound',secondKpi:'hold_compound_plan',condition:'sum',division:'hold_data',divrccm:'hold_rccm',titleOne:'Hold Compound (Kg)',titleTwo:'Plan (Kg)'}
            case 'rejectCompound':
            return {firstKpi: 'reject_compound',secondKpi:'reject_compound_plan',condition:'sum',division:'hold_data',divrccm:'hold_rccm',titleOne:'Reject Compound (Kg)',titleTwo:'Plan (Kg)'}
            case 'nmDirty':
                return{firstKpi: 'nm_dirty_tires',secondKpi:'nm_dirty_tires_plan',condition:'sum',division:'quality_data',divrccm:'quality_rccm',titleOne:'NM Dirty Tires (Not)',titleTwo:'Plan (Not)'}
                case 'compoundWeight':
                return {firstKpi: 'compound_weight_actual',secondKpi:'compound_weight_plan',condition:'sum',division:'mixing_data',divrccm:'mixing_rccm',titleOne:'Compound Weight Actual (Kg)',titleTwo:'Plan (Kg)'}
                case 'mixingBreakDown':
                return{firstKpi: 'mixing_break_down',secondKpi:'mixing_break_down_plan',condition:'sum',division:'mixing_data',divrccm:'mixing_rccm',titleOne:'Mixing Break Down (hrs)',titleTwo:'Plan (hrs)'}
                case 'mixingProductivity':
                return {firstKpi: 'mixing_productivity',secondKpi:'mixing_productivity_plan',condition:'sum',division:'mixing_data',divrccm:'mixing_rccm',titleOne:'Mixing Productivity (Kg/hrs)',titleTwo:'Plan (Kg/hrs)'}
                case 'mixingManPower':
                    return{firstKpi: 'mixing_man_power',secondKpi:'mixing_man_power_plan',condition:'sum',division:'mixing_data',divrccm:'mixing_rccm',titleOne:'Mixing Man Power (No)',titleTwo:'Plan (No)'}
                    case 'mixingEnergy':
                    return {firstKpi: 'mixing_energy',secondKpi:'mixing_energy_plan',condition:'avg',division:'mixing_data',divrccm:'mixing_rccm',titleOne:'Mixing Energy (Kwh)',titleTwo:'Plan (Kwh)'}
                    case 'energyCost':
                    return{firstKpi: 'energy_cost_kg',secondKpi:'energy_cost_kg_plan',condition:'avg',division:'eng_data',divrccm:'eng_rccm',titleOne:'Energy Cost Rate (Cost/Kg)',titleTwo:'Plan (Cost/Kg)'}
                    case 'energyConsumed':
                    return {firstKpi: 'energy_consumed',secondKpi:'energy_consumed_plan',condition:'avg',division:'eng_data',divrccm:'eng_rccm',titleOne:'Energy Consumed(Kwh)',titleTwo:'Plan (Kwh)'}
                    case 'breakdown':
                        return{firstKpi: 'break_down',secondKpi:'break_down_plan',condition:'avg',division:'eng_data',divrccm:'eng_rccm',titleOne:'Break Down (hrs)',titleTwo:'Plan (hrs)'}
                        case 'fireWoodCostRate':
                        return {firstKpi: 'firewood_cost_rate',secondKpi:'firewood_cost_rate_plan',condition:'avg',division:'eng_data',divrccm:'eng_rccm',titleOne:'Firewood Cost Rate (Cost/Kg)',titleTwo:'Plan (Cost/Kg)'}
                        case 'oil':
                        return{firstKpi: 'oil',secondKpi:'oil_plan',condition:'avgsum',division:'eng_data',divrccm:'eng_rccm',titleOne:'Oil Consumption (Ltr)',titleTwo:'Plan (Ltr)'}
                        case 'pm':
                        return {firstKpi: 'pm',secondKpi:'pm_plan',condition:'avg',division:'eng_data',divrccm:'eng_rccm',titleOne:'PM Achivment (%)',titleTwo:'Plan (%)'}

                        case 'absentInform':
                        return{firstKpi: 'absent_inform',secondKpi:'absent_inform_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Absent Inform (No)',titleTwo:'Plan (No)'}
                        case 'absentNonInform':
                        return {firstKpi: 'absent_non_inform',secondKpi:'absent_non_inform_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Absent Non Inform (No)',titleTwo:'Plan (No)'}
                        case 'late':
                        return{firstKpi: 'late',secondKpi:'late_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Late(No)',titleTwo:'Plan (No)'}
                        case 'manPower':
                        return {firstKpi: 'man_power',secondKpi:'man_power_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Man Power (No)',titleTwo:'Plan (No)'}

                        case 'dot':
                            return{firstKpi: 'dot',secondKpi:'dot_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'DOT (No)',titleTwo:'Plan (No)'}
                            case 'reportableAccident':
                            return {firstKpi: 'reportable_accident',secondKpi:'reportable_accident_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Reportable Accident (No)',titleTwo:'Plan (No)'}
                            case 'nearMiss':
                            return{firstKpi: 'near_miss',secondKpi:'near_miss_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Near Miss (No)',titleTwo:'Plan (No)'}
                            case 'kaizen':
                            return {firstKpi: 'kaizen',secondKpi:'kaizen_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Kaizen (No)',titleTwo:'Plan (No)'}

                            case 'training':
                                return{firstKpi: 'training',secondKpi:'training_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Training (hrs)',titleTwo:'Plan (hrs)'}
                                case 'creelBead':
                                return {firstKpi: 'creel_bead_actual',secondKpi:'creel_bead_plan',condition:'sum',division:'bead_data',divrccm:'bead_rccm',titleOne:'Bead Production (No)',titleTwo:'Plan (No)'}
                                case 'rejectBead':
                                return{firstKpi: 'reject_bead',secondKpi:'reject_Bead_plan',condition:'sum',division:'bead_data',divrccm:'bead_rccm',titleOne:'Reject Bead  (No)',titleTwo:'Plan (No)'}
                                case 'beadEnergy':
                                return {firstKpi: 'bead_energy',secondKpi:'bead_energy_plan',condition:'avg',division:'bead_data',divrccm:'bead_rccm',titleOne:'Bead Energy (Kwh)',titleTwo:'Plan (Kwh)'}

                                case 'beadBreakDown':
                                    return{firstKpi: 'bead_breakdown',secondKpi:'bead_breakdown_plan',condition:'sum',division:'bead_data',divrccm:'bead_rccm',titleOne:'Bead Break Down (hrs)',titleTwo:'Plan (hrs)'}
                                    case 'beadProductivity':
                                    return{firstKpi: 'bead_productivity_actual',secondKpi:'bead_productivity_plan',condition:'avg',division:'bead_data',divrccm:'bead_rccm',titleOne:'Bead Productivity (No/hrs)',titleTwo:'Plan (No/hrs)'}
                                    case 'beadManPower':
                                    return {firstKpi: 'bead_manpower_actual',secondKpi:'bead_manpower_plan',condition:'sum',division:'bead_data',divrccm:'bead_rccm',titleOne:'Bead Man Power (No)',titleTwo:'Plan (No)'}
                                    case 'nonReportableAccident':
                                        return {firstKpi: 'non_reportable_accident',secondKpi:'non_reportable_accident_plan',condition:'sum',division:'hr_data',divrccm:'hr_rccm',titleOne:'Non Reportable Accident (No)',titleTwo:'Plan (No)'}
    }
}

export  const  reportContext  =createContext()

export const ContextProvider = (props) => {


    const [kpi,dispatch] =useReducer(reducer,initialState)


    //console.log(kpi);





























    const [lineChartData,setLineChartData]=useState([])
    const [barChartData,setBarChartData]=useState([])

      
    const [mfgData,setMfgData]=useState('')
    const [mfgDataCount,setMfgDataCount]=useState('')
    const [mfgDataMTD,setMfgDataMTD]=useState('')
    const [mfgDataCountMTD,setMfgDataCountMTD]=useState('')


    const [mfgDataFirst,setMfgDataFirst]=useState('')
    const [mfgDataSecond,setMfgDataSecond]=useState('')
    const [mfgDataThird,setMfgDataThird]=useState('')
    const [mfgDataFourth,setMfgDataFourth]=useState('')
    const [mfgDataFive,setMfgDataFive]=useState('')
    const [mfgDataSix,setMfgDataSix]=useState('')
    const [mfgDataSeven,setMfgDataSeven]=useState('')
    const [mfgDataEight,setMfgDataEight]=useState('')

    const [mfgDataFirstCount,setMfgDataFirstCount]=useState('')
    const [mfgDataSecondCount,setMfgDataSecondCount]=useState('')
    const [mfgDataThirdCount,setMfgDataThirdCount]=useState('')
    const [mfgDataFourthCount,setMfgDataFourthCount]=useState('')
    const [mfgDataFiveCount,setMfgDataFiveCount]=useState('')
    const [mfgDataSixCount,setMfgDataSixCount]=useState('')
    const [mfgDataSevenCount,setMfgDataSevenCount]=useState('')
    const [mfgDataEightCount,setMfgDataEightCount]=useState('')

    /////////////////////////////////////////////////////

    const [QualityCountA,setQualityCountA]=useState('')
    const [QualitySumWeightA,setQualitySumWeightA]=useState('')

    const [QualityCountAPlus,setQualityCountAPlus]=useState('')
    const [QualitySumWeightAPlus,setQualitySumWeightAPlus]=useState('')

    const [QualityCountB,setQualityCountB]=useState('')
    const [QualitySumWeightB,setQualitySumWeightB]=useState('')

    const [QualityCountE,setQualityCountE]=useState('')
    const [QualitySumWeightE,setQualitySumWeightE]=useState('')

    const [QualityCountR,setQualityCountR]=useState('')
    const [QualitySumWeightR,setQualitySumWeightR]=useState('')

    const [QualityCountL,setQualityCountL]=useState('')
    const [QualitySumWeightL,setQualitySumWeightL]=useState('')

    //////////////////////////////mtd

    const [qualityDataAMTD,setQualityDataAMTD]=useState('')
    const [qualityDataCountAMTD,setQualityDataCountAMTD]=useState('')

    const [qualityDataBMTD,setQualityDataBMTD]=useState('')
    const [qualityDataCountBMTD,setQualityDataCountBMTD]=useState('')

    const [qualityDataEMTD,setQualityDataEMTD]=useState('')
    const [qualityDataCountEMTD,setQualityDataCountEMTD]=useState('')

    const [qualityDataRMTD,setQualityDataRMTD]=useState('')
    const [qualityDataCountRMTD,setQualityDataCountRMTD]=useState('')

    const [qualityDataLMTD,setQualityDataLMTD]=useState('')
    const [qualityDataCountLMTD,setQualityDataCountLMTD]=useState('')

    const [qualityDataAPlusMTD,setQualityDataAPlusMTD]=useState('')
    const [qualityDataCountAPlusMTD,setQualityDataCountAPlusMTD]=useState('')


    /////////////////////////////////
    const  [stateSelect, setStateSelect] = useState('')

/////////rccm//////////

const [rccmData,setRccmData]= useState([])

const myDateMain=new Date()

    // const[datem,setDatem] =useState(new Date())
    const [ddate,setDdate] =useState(myDateMain.setDate(myDateMain.getDate() - 1))
    // console.log(datem);

    const myDateMeter=new Date()  
    const [medate,setMeDdate] =useState(myDateMeter.setDate(myDateMeter.getDate() - 1))


////////////////////////////////////
const myDate=new Date()
      
const [dateOne,setDateOne]=useState(myDate.setDate(myDate.getDate() - 20))
const [dateTwo,setDateTwo]=useState(new Date())



const [productionDashData,setProductionDashData]  =useState([])

const [qualityDashData,setQualityDashData]  =useState([])

const [mixingDashData,setMixingDashData]  =useState([])

const [beadDashData,setBeadDashData]  =useState([])

const [safetyDashData,setSafetyDashData]  =useState([])

const [hrDashData,setHRDashData]  =useState([])


const [engDashData,setENGDashData]  =useState([])

//myDate.setDate(myDate.getDate() - 150)

//dashboard data

const [productionDashActual,setProductionDashActual]  =useState([])
const [productionDashPlan,setProductionDashPlan]  =useState([])

const [productionDashAdherence,setProductionDashAdherence]  =useState([])

const [productionDashUtilization,setProductionDashUtilization]  =useState([])

const [productionDashProductivity,setProductionDashProductivity]  =useState([])



/////////////////quality///////////////

const [qualityDashFtr,setQualityDashFtr]  =useState([])

const [qualityDashBerlc,setQualityDashBerlc]  =useState([])

const [qualityDashB,setQualityDashB]  =useState([])

const [qualityDashE,setQualityDashE]  =useState([])

const [qualityR,setQualityR]  =useState([])

const [qualityL,setQualityL]  =useState([])

const [qualityC,setQualityC]  =useState([])

const [qualityDashFlash,setQualityDashFlash]  =useState([])

const [qualityDashRejectCompound,setQualityDashRejectCompound]  =useState([])

const [qualityDashHold,setQualityDashHold]  =useState([])

const [qualityDashNM,setQualityDashNM]  =useState([])

///////////////Mixing///////////////

const [mixingDashTonnage,setMixingDashTonnage]  =useState([])
const [mixingDashTonnagePlan,setMixingDashTonnagePlan]  =useState([])

const [mixingDashProductivity,setMixingDashProductivity]  =useState([])

const [mixingDashBreakDown,setMixingDashBreakDown]  =useState([])

const [mixingDashEnergy,setMixingDashEnergy]  =useState([])


////////bead////////////////////////

const [beadDashBead,setBeadDashBead]  =useState([])
const [beadDashBeadPlan,setBeadDashBeadPlan]  =useState([])

const [beadDashRejectBead,setBeadDashRejectBead]  =useState([])

const [beadDashEnergy,setBeadDashEnergy]  =useState([])

const [beadDashBreakDown,setBeadDashBreakDown]  =useState([])



////////////////////hr///////////////////

const [hrDashNearMiss,setHRDashNearMis]  =useState([])

const [hrDashKaizen,setHRDashKaizen]  =useState([])

const [hrDashNRC,setHRDashNRC]  =useState([])

const [hrDashRA,setHRDashRA]  =useState([])

const [hrDashdOT,setHRDashDot]  =useState([])

const [hrDashAI,setHRDashAI]  =useState([])

const [hrDashANI,setHRDashANI]  =useState([])

const [hrDashManpower,setHRDashManpower] =useState([])

////////////////////////////////////////

const [engDashBreakDown,setENGDashBreakDown]  =useState([])

const [engDashFuelRate,setENGDashFuelRate]  =useState([])

const [engDashFuelConsumption,setENGDashFuelConsumption]  =useState([])


const [engDashEnergyCostRate,setENGDashEnergyCostRate]  =useState([])


const [engDashPowerConsumption,setENGDashPowerConsumption]  =useState([])


/////////PIECHART//////////////

const [pieChartData,setPieChartData]  =useState([])

const [pieChartDataTwo,setPieChartDataTwo] = useState([])


////////////////////////////////////////////////////////////


const [weekDate,setWeekDate]  =useState(myDateMain.setDate(myDateMain.getDate() - 7))

const [weekDateTwo,setWeekDateTwo] = useState(new Date())

const myDateMainTwo=new Date()
const myDateMainFour=new Date()
const myDateMainThree=new Date()
const myDateMainFive=new Date()
const myDateMainSix=new Date()
const myDateMainSeven=new Date()
const myDateMainEight=new Date()


const [weekDateFour,setWeekDateFour] = useState(myDateMainTwo.setDate(myDateMainTwo.getDate() - 10))




const [weekDateThree,setWeekDateThree]  =useState(myDateMainThree.setDate(myDateMainThree.getDate() - 17))


const [weekDateFive,setWeekDateFive]  =useState(myDateMainFive.setDate(myDateMainFive.getDate() - 25))



const [weekDateSix,setWeekDateSix] = useState(myDateMainSix.setDate(myDateMainSix.getDate() - 18))




const [weekDateSeven,setWeekDateSeven]  =useState(myDateMainSeven.setDate(myDateMainSeven.getDate() - 33))



const [weekDateEight,setWeekDateEight] = useState(myDateMainEight.setDate(myDateMainEight.getDate() - 26))



const [weekChartData,setWeekChartData]  =useState([])

const [weekChartDataTwo,setWeekChartDataTwo] = useState([])

const [weekChartDataThree,setWeekChartDataThree]  =useState([])

const [weekChartDataFour,setWeekChartDataFour] = useState([])





const[shift,setShift] =useState('TOTAL')


const[  pressNumberOne,setPressNumberOne] =useState([])

const[pressSumSrt,setPressSumSrt]=useState([])
const[pressSumPob,setPressSumPob]=useState([])
const[pressSumApw,setPressSumApw]=useState([])
const[pressSumPbb,setPressSumPbb]=useState([])
const[pressSumSks,setPressSumSks]=useState([])



const[pressCountSrt,setPressCountSrt]=useState([])
const[pressCountPob,setPressCountPob]=useState([])
const[pressCountApw,setPressCountApw]=useState([])
const[pressCountPbb,setPressCountPbb]=useState([])
const[pressCountSks,setPressCountSks]=useState([])



    return (
        <div>
            <reportContext.Provider value={{dateOne,setDateOne,dateTwo,setDateTwo,mfgData,setMfgData,ddate,setDdate,mfgDataFirst,setMfgDataFirst,mfgDataSecond,setMfgDataSecond,mfgDataThird,setMfgDataThird
            ,mfgDataFourth,setMfgDataFourth,mfgDataFive,setMfgDataFive,mfgDataSix,setMfgDataSix,mfgDataSeven,setMfgDataSeven,mfgDataEight,setMfgDataEight,mfgDataCount,setMfgDataCount,mfgDataFirstCount,setMfgDataFirstCount,mfgDataSecondCount,setMfgDataSecondCount,mfgDataThirdCount,setMfgDataThirdCount
            ,mfgDataFourthCount,setMfgDataFourthCount,mfgDataFiveCount,setMfgDataFiveCount,mfgDataSixCount,setMfgDataSixCount,mfgDataSevenCount,setMfgDataSevenCount,mfgDataEightCount,setMfgDataEightCount,mfgDataMTD,setMfgDataMTD,mfgDataCountMTD,setMfgDataCountMTD,QualityCountA,setQualityCountA,
            QualitySumWeightA,setQualitySumWeightA, QualitySumWeightAPlus,setQualitySumWeightAPlus,QualityCountAPlus,setQualityCountAPlus, QualitySumWeightB,setQualitySumWeightB,QualityCountB,setQualityCountB, QualitySumWeightE,setQualitySumWeightE,QualityCountE,setQualityCountE, QualitySumWeightR,setQualitySumWeightR,QualityCountR,setQualityCountR, QualitySumWeightL,setQualitySumWeightL,QualityCountL,setQualityCountL,qualityDataAMTD,setQualityDataAMTD,
            qualityDataCountAMTD,setQualityDataCountAMTD,qualityDataBMTD,setQualityDataBMTD,qualityDataCountBMTD,setQualityDataCountBMTD,
            qualityDataEMTD,setQualityDataEMTD,qualityDataCountEMTD,setQualityDataCountEMTD,qualityDataRMTD,setQualityDataRMTD,
            qualityDataCountRMTD,setQualityDataCountRMTD,qualityDataLMTD,setQualityDataLMTD,qualityDataCountLMTD,setQualityDataCountLMTD,qualityDataAPlusMTD,setQualityDataAPlusMTD,qualityDataCountAPlusMTD,setQualityDataCountAPlusMTD,
        kpi,dispatch,lineChartData,setLineChartData,barChartData,setBarChartData ,rccmData,setRccmData,stateSelect, setStateSelect
        ,productionDashData,setProductionDashData,qualityDashData,setQualityDashData,mixingDashData,setMixingDashData,
        beadDashData,setBeadDashData,hrDashData,setHRDashData,engDashData,setENGDashData,
        productionDashActual,setProductionDashActual,productionDashPlan,setProductionDashPlan,productionDashAdherence,setProductionDashAdherence,productionDashUtilization,setProductionDashUtilization,productionDashProductivity,setProductionDashProductivity,
        qualityDashFtr,setQualityDashFtr,qualityDashBerlc,setQualityDashBerlc,qualityDashB,setQualityDashB,qualityDashE,setQualityDashE,qualityR,setQualityR,qualityL,setQualityL,qualityC,setQualityC,qualityDashFlash,setQualityDashFlash,qualityDashRejectCompound,setQualityDashRejectCompound,qualityDashHold,setQualityDashHold,
        mixingDashTonnage,setMixingDashTonnage,mixingDashTonnagePlan,setMixingDashTonnagePlan,mixingDashProductivity,setMixingDashProductivity,mixingDashBreakDown,setMixingDashBreakDown,mixingDashEnergy,setMixingDashEnergy,beadDashEnergy,setBeadDashEnergy,
        beadDashBead,setBeadDashBead,beadDashBeadPlan,setBeadDashBeadPlan,beadDashRejectBead,setBeadDashRejectBead,beadDashBreakDown,setBeadDashBreakDown,
        hrDashNearMiss,setHRDashNearMis,hrDashKaizen,setHRDashKaizen,hrDashNRC,setHRDashNRC,hrDashRA,setHRDashRA,hrDashdOT,setHRDashDot,hrDashAI,setHRDashAI,hrDashANI,setHRDashANI,
        engDashBreakDown,setENGDashBreakDown,engDashFuelRate,setENGDashFuelRate,engDashFuelConsumption,setENGDashFuelConsumption,engDashEnergyCostRate,setENGDashEnergyCostRate,engDashPowerConsumption,setENGDashPowerConsumption,qualityDashNM,setQualityDashNM,setHRDashManpower,hrDashManpower,pieChartData,setPieChartData,pieChartDataTwo,setPieChartDataTwo,
        weekDate,setWeekDate,weekDateTwo,setWeekDateTwo,weekChartData,setWeekChartData,weekChartDataTwo,setWeekChartDataTwo,
        weekDateThree,setWeekDateThree,weekDateFour,setWeekDateFour,
        weekDateFive,setWeekDateFive,weekDateSix,setWeekDateSix,weekDateSeven,setWeekDateSeven,weekDateEight,setWeekDateEight,weekChartDataThree,setWeekChartDataThree,
        weekChartDataFour,setWeekChartDataFour,medate,setMeDdate,shift,setShift, setPressNumberOne, pressNumberOne,pressSumSrt,setPressSumSrt,pressSumPob,setPressSumPob,pressSumApw,setPressSumApw,pressSumPbb,setPressSumPbb,pressSumSks,setPressSumSks,
        pressCountSrt,setPressCountSrt,pressCountPob,setPressCountPob,pressCountApw,setPressCountApw,pressCountPbb,setPressCountPbb,pressCountSks,setPressCountSks
        }}>
               {props.children}
            </reportContext.Provider>
        </div>
    )
}



