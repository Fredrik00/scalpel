const operations = [
	{
		id: 0,
		theater: 0,
		// As per the documentation, preparation is calcluated given a start time, 
		// pre-/post time (in minutes) (from a drop down) and knife time (in minutes)
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 14:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				end: '2018-08-03 15:40',
				duration: 10
			}
		],
		patientName: 'Christian Olsen',
		plannedStartTime: '2018-08-03 14:00',
		plannedEndTime: '2018-08-03 14:40',
		phases: [
			{
				id: 0,
				start: '2018-08-03 14:37',
				end: '2018-08-03 14:53'
			},
			{
				id: 1,
				start: '2018-08-03 14:55',
				end: '2018-08-03 15:01'
			},
			{
				id: 2,
				start: '2018-08-03 15:03',
				end: '2018-08-03 15:18'
			},
			{
				id: 3,
				start: '2018-08-03 15:19',
				end: '2018-08-03 15:22'
			},
			{
				id: 4,
				start: '2018-08-03 15:23',
				end: '2018-08-03 15:37'
			}
		],
		crew: [
			{id: 1, position: 'Kirurg'},
			{id: 3, position: 'Assistent 1'},
			{id: 4, position: 'Assistent 2'}],
		careUnitName: 'KB2',
		operatingDate: '2018-08-03 15:11',
		arrivalTime: '2018-08-03 14:11',
		surgeonTime: 15,
		patientBirthDate: '1957-10-22',
		bloodType: 'B',
		asa: 2,
		diagnoseTypeFreeText: 'FCF sin',
		procedureTypeFreeText: 'Hemiprotese sin',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'A',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nOppmøte 15.15 2\n',
		medicalInformation: '',
		fasting: '',
		position: 'Ryggleie',
		anesthesiaCode: 'Sp',
		noAnesthesia: true,
		trauma: true,
		thrombosisProphylaxis: false,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 160,
		weight: 65,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22105749992'
	},
	{
		id: 1,
		theater: 0,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 10:27',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				end: '2018-08-03 12:07',
				duration: 10
			}
		],
		patientName: 'Asbjørg Mong',
		plannedStartTime: '2018-08-03 10:27',
		plannedEndTime: '2018-08-03 11:05',
		phases: [
			{
				id: 0,
				start: '2018-08-03 10:21',
				end: '2018-08-03 10:51'
			},
			{
				id: 1,
				start: '2018-08-03 11:01',
				end: '2018-08-03 11:10'
			},
			{
				id: 2,
				start: '2018-08-03 11:12',
				end: '2018-08-03 11:34'
			},
			{
				id: 3,
				start: '2018-08-03 11:35',
				end: '2018-08-03 11:38'
			},
			{
				id: 4,
				start: '2018-08-03 11:38',
				end: '2018-08-03 15:00'
			}
		],
		crew: [
			{id: 5, position: 'Kirurg'},
			{id: 6, position: 'Assistent 1'},
			{id: 7, position: 'Assistent 2'}],
		careUnitName: 'OFS',
		operatingDate: '2018-08-03 17:11',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 15,
		patientBirthDate: '1995-10-22',
		bloodType: 'AB',
		asa: 3,
		diagnoseTypeFreeText: 'Arr abdomen',
		procedureTypeFreeText: 'Arrkorreksjon',
		equipment: 'Botox',
		tils: '',
		priority: 3,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: '3t før op',
		position: 'Mageleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: true,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 159,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22109549492'
	},
	{
		id: 2,
		theater: 1,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 14:50',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 16:30'
			}
		],
		patientName: 'Maria Johansen',
		plannedStartTime: '2018-08-03 14:50',
		plannedEndTime: '2018-08-03 16:25',
		phases: [
			{
				id: 0,
				start: '2018-08-03 14:49',
				end: '2018-08-03 15:02'
			},
			{
				id: 1,
				start: '2018-08-03 15:02',
				end: '2018-08-03 15:13'
			},
			{
				id: 2,
				start: '2018-08-03 15:13',
				end: '2018-08-03 15:59'
			},
			{
				id: 3,
				start: '2018-08-03 15:59',
				end: '2018-08-03 16:06'
			},
			{
				id: 4,
				start: '2018-08-03 16:07',
				end: '2018-08-03 16:13'
			}
		],
		crew: [
			{id: 8, position: 'Kirurg'},
			{id: 5, position: 'Assistent 1'},
			{id: 6, position: 'Assistent 2'}],
		careUnitName: 'OTDP',
		operatingDate: '2018-08-03 17:11',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Meniskskade',
		procedureTypeFreeText: 'Artroskopi venstre kne, meniskreseksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: 'Bruker ingen medisiner\r\nregelmessig\r\n',
		fasting: '-',
		position: 'Sideleie',
		anesthesiaCode: 'N/Epi',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100549292'
	},
	{
		id: 3,
		theater: 1,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 08:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 09:40'
			}
		],
		patientName: 'Asle Seim',
		plannedStartTime: '2018-08-03 08:00',
		plannedEndTime: '2018-08-03 09:30',
		phases: [
			{
				id: 0,
				start: '2018-08-03 08:11',
				end: '2018-08-03 08:43'
			},
			{
				id: 1,
				start: '2018-08-03 08:43',
				end: '2018-08-03 09:00'
			},
			{
				id: 2,
				start: '2018-08-03 09:02',
				end: '2018-08-03 09:34'
			},
			{
				id: 3,
				start: '2018-08-03 09:36',
				end: '2018-08-03 09:45'
			},
			{
				id: 4,
				start: '2018-08-03 09:50'//,
				//end: '2018-08-03 10:00'
			}
		],
		crew: [
			{id: 8, position: 'Kirurg'},
			{id: 5, position: 'Assistent 1'},
			{id: 6, position: 'Assistent 2'}],
		careUnitName: 'OTDP',
		operatingDate: '2018-08-03 17:11',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 15,
		patientBirthDate: '2005-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Arr abdomen',
		procedureTypeFreeText: 'Arrkorreksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Marevan - nedtrapping v/fastlege\r\nTa INR v/ oppmøte DK\r\n',
		medicalInformation: '',
		fasting: '-',
		position: 'Sideleie',
		anesthesiaCode: 'N/Epi',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 170,
		weight: 62,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100549992'
	},
	{
		id: 4,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 09:20',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 11:00'
			}
		],
		patientName: 'Sarah Karlsen',
		plannedStartTime: '2018-08-03 09:20',
		plannedEndTime: '2018-08-03 10:20',
		phases: [
			{
				id: 0,
				start: '2018-08-03 09:30',
				end: '2018-08-03 09:43'
			},
			{
				id: 1,
				start: '2018-08-03 09:43',
				end: '2018-08-03 09:48'
			},
			{
				id: 2,
				start: '2018-08-03 09:48',
				end: '2018-08-03 10:00'
			},
			{
				id: 3,
				start: '2018-08-03 10:01',
				end: '2018-08-03 10:10'
			},
			{
				id: 4,
				start: '2018-08-03 10:11',
				end: '2018-08-03 10:23'
			}
		],
		crew: [
			{id: 7, position: 'Kirurg'},
			{id: 5, position: 'Assistent 1'},
			{id: 6, position: 'Assistent 2'}],
		careUnitName: 'ODP',
		operatingDate: '2018-08-03 12:11',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-07-16',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: 'Botox',
		tils: 'S',
		priority: 1,
		messageFromBedWard: 'Ta INR v/ oppmøte DK\r\n',
		medicalInformation: 'Cave apocillin\r\n',
		fasting: 'Fått frokost',
		position: 'Ryggleie',
		anesthesiaCode: '',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Ikke info om symptomer i det siste, \nnormal EKG og klinisk noe ved innkomst.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: true,
		needsCentralVenousCatheter: true,
		height: 190,
		weight: 100,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '16078249292'
	},
	{
		id: 5,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 10:30',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 12:10'
			}
		],
		patientName: 'Jarl Grøtte',
		plannedStartTime: '2018-08-03 10:30',
		plannedEndTime: '2018-08-03 12:00',
		phases: [
			{
				id: 0,
				start: '2018-08-03 10:05',
				end: '2018-08-03 10:50'
			},
			{
				id: 1,
				start: '2018-08-03 10:52',
				end: '2018-08-03 11:15'
			},
			{
				id: 2,
				start: '2018-08-03 11:18',
				end: '2018-08-03 11:40'
			},
			{
				id: 3,
				start: '2018-08-03 11:41',
				end: '2018-08-03 11:48'
			},
			{
				id: 4,
				start: '2018-08-03 11:48',
				end: '2018-08-03 11:58'
			}
		],
		crew: [
			{id: 2, position: 'Kirurg'},
			{id: 3, position: 'Assistent 1'},
			{id: 5, position: 'Assistent 2'}],
		careUnitName: 'OPLDP',
		operatingDate: '2017-09-15 13:11',
		arrivalTime: '2017-09-17 14:11',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'B',
		asa: 2,
		diagnoseTypeFreeText: 'Meniskskade',
		procedureTypeFreeText: 'Artroskopi venstre kne, meniskreseksjon',
		equipment: 'AS + shaver + osteosyntesebrikke',
		tils: 'P',
		priority: 2,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\nPlanlagt på Røros men flyttet\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: '',
		position: 'Ryggleie',
		anesthesiaCode: 'Plex',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Dement. Tidl alkohol. Sykehjemsboer.',
		anesthesiaCodeCoParacet: '1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 179,
		weight: 60,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749992'
	},
	{
		id: 6,
		theater: 2,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 15:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 16:40'
			}
		],
		plannedStartTime: '2018-08-03 15:00',
		plannedEndTime: '2018-08-03 16:50',
		patientName: 'Andreas Halvorsen',
		phases: [
			{
				id: 0,
				start: '2018-08-03 15:11',
				end: '2018-08-03 15:23'
			},
			{
				id: 1,
				start: '2018-08-03 15:24',
				end: '2018-08-03 15:38'
			},
			{
				id: 2,
				start: '2018-08-03 15:45',
				end: '2018-08-03 16:15'
			},
			{
				id: 3,
				start: '2018-08-03 16:15',
				end: '2018-08-03 16:20'
			},
			{
				id: 4,
				start: '2018-08-03 16:22',
				end: '2018-08-03 16:35'
			}
		],
		crew: [
			{id: 2, position: 'Kirurg'},
			{id: 4, position: 'Assistent 1'}],
		careUnitName: 'OFS',
		operatingDate: '2018-08-03 15:30',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 15,
		patientBirthDate: '1982-10-22',
		bloodType: 'A',
		asa: 1,
		diagnoseTypeFreeText: 'Fremmedlegme finger hø hånd',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: '',
		tils: 'i',
		priority: 2,
		messageFromBedWard: 'Sengepost informert 5/10\r\n',
		medicalInformation: '',
		fasting: 'fra 14',
		position: 'Sideleie',
		anesthesiaCode: 'Sp',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: false,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Dement. Sykehjemsboer.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 180,
		weight: 90,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108249992'
	},
	{
		id: 7,
		theater: 3,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 14:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 15:40'
			}
		],
		plannedStartTime: '2018-08-03 14:00',
		plannedEndTime: '2018-08-03 15:20',
		patientName: 'Lillian Andersen',
		phases: [
			{
				id: 0,
				start: '2018-08-03 14:05',
				end: '2018-08-03 14:20'
			},
			{
				id: 1,
				start: '2018-08-03 14:20',
				end: '2018-08-03 14:31'
			},
			{
				id: 2,
				start: '2018-08-03 14:33',
				end: '2018-08-03 14:45'
			},
			{
				id: 3,
				start: '2018-08-03 14:45',
				end: '2018-08-03 15:05'
			},
			{
				id: 4,
				start: '2018-08-03 15:06',
				end: '2018-08-03 15:30'
			},
		],
		crew: [
			{id: 4, position: 'Kirurg'},
			{id: 6, position: 'Assistent 1'}],
		careUnitName: 'OFS',
		operatingDate: '2018-08-03 11:11',
		arrivalTime: '2017-09-19 15:11',
		surgeonTime: 15,
		patientBirthDate: '2001-10-22',
		bloodType: 'O',
		asa: 4,
		diagnoseTypeFreeText: 'Coxartrose sin',
		procedureTypeFreeText: 'Hofteprotese',
		equipment: 'Explant 52/28, polarkopp, 28mm hode til Securos stamme',
		tils: 'a',
		priority: 2,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\nPlanlagt på Røros men flyttet\r\n',
		medicalInformation: '',
		fasting: 'fra 14',
		position: 'Mageleie',
		anesthesiaCode: 'N/Epi',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: true,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: true,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. \nTannprotese. Nakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: false,
		needsEpiduralAnesthetic: true,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 122,
		weight: 50,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22100149692'
	},
	{
		id: 8,
		theater: 4,
		plannedPhases: [
			{
				id: 0,
				start: '2018-08-03 13:00',
				duration: 30
			},
			{
				id: 1,
				duration: 60
			},
			{
				id: 2,
				duration: 10,
				end: '2018-08-03 14:40'
			}
		],
		plannedStartTime: '2018-08-03 13:00',
		plannedEndTime: '2018-08-03 13:58',
		patientName: 'Hannah Wilhelmsen',
		phases: [
			{
				id: 0,
				start: '2018-08-03 13:07',
				end: '2018-08-03 13:20'
			},
			{
				id: 1,
				start: '2018-08-03 13:20',
				end: '2018-08-03 13:46'
			},
			{
				id: 2,
				start: '2018-08-03 13:48',
				end: '2018-08-03 14:11'
			},
			{
				id: 3,
				start: '2018-08-03 14:15',
				end: '2018-08-03 14:31'
			},
			{
				id: 4,
				start: '2018-08-03 14:34',
				end: '2018-08-03 14:47'
			},
		],
		crew: [
			{id: 2, position: 'Kirurg'}],
		assistant1: '',
		assistant2: '',
		careUnitName: 'OTDP',
		operatingDate: '2018-08-03 17:11',
		arrivalTime: '2018-08-03 15:11',
		surgeonTime: 10,
		patientBirthDate: '1987-10-22',
		bloodType: 'O',
		asa: 1,
		diagnoseTypeFreeText: 'Plica medialis',
		procedureTypeFreeText: 'Artroskopisk partiell synovectomi ve. kne',
		equipment: 'Botox',
		tils: 'A',
		priority: 1,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\n\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749692'
	},
	{
		id: 9,
		theater: 4,
		patientName: 'Ellen Skien',
		plannedPhases: [
			{
				id: 0,
				start: '2017-11-23 11:30',
				duration: 40
			},
			{
				id: 1,
				duration: 80
			},
			{
				id: 2,
				duration: 20
			}
		],
		phases: [
			{
				id: 0,
				start: '2017-11-23 11:40',
				end: '2017-11-23 11:58'
			},
			{
				id: 1,
				start: '2017-11-23 12:09',
				end: '2017-11-23 12:34'
			},
			{
				id: 2,
				start: '2017-11-23 12:35',
			},
			{
				id: 3
			},
			{
				id: 4
			},
		],
		crew: [
			{id: 3, position: 'Kirurg'},
			{id: 10, position: 'Assistent 1'}],
		careUnitName: 'KB2',
		operatingDate: '2017-11-23 07:00',
		arrivalTime: '2017-11-23 06:00',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Plica medialis',
		procedureTypeFreeText: 'Artroskopisk partiell synovectomi ve. kne',
		equipment: 'Botox',
		tils: 'A',
		priority: 1,
		messageFromBedWard: 'Oppmøte DK 10/10 kl 10\r\n\r\n',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749092'
	},
	{
		id: 10,
		theater: 3,
		patientName: 'Geir Åge Gundersen',
		plannedPhases: [
			{
				id: 0,
				start: '2017-11-23 15:13',
				duration: 20
			},
			{
				id: 1,
				duration: 80
			},
			{
				id: 2,
				duration: 25
			}
		],
		phases: [
			{
				id: 0
			},
			{
				id: 1
			},
			{
				id: 2
			},
			{
				id: 3
			},
			{
				id: 4
			},
		],
		crew: [
			{id: 3, position: 'Kirurg'},
			{id: 1, position: 'Assistent 1'}],
		careUnitName: 'KB2',
		operatingDate: '2017-11-23 07:00',
		arrivalTime: '2017-11-23 06:00',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Flis i fingeren',
		procedureTypeFreeText: 'Fjerne flis',
		equipment: 'Pinsett',
		tils: 'A',
		priority: 1,
		messageFromBedWard: '',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749192'
	},
	{
		id: 11,
		theater: 1,
		patientName: 'Jonas Bore',
		plannedPhases: [
			{
				id: 0,
				start: '2017-11-23 09:00',
				duration: 10
			},
			{
				id: 1,
				duration: 40
			},
			{
				id: 2,
				duration: 15
			}
		],
		phases: [
			{
				id: 0,
				start: '2017-11-23 09:09',
				end: '2017-11-23 09:30'
			},
			{
				id: 1,
				start: '2017-11-23 09:34',
				end: '2017-11-23 09:42'
			},
			{
				id: 2,
				start: '2017-11-23 09:57',
				end: '2017-11-23 10:27',
			},
			{
				id: 3,
				start: '2017-11-23 10:31',
				end: '2017-11-23 10:44'
			},
			{
				id: 4,
				start: '2017-11-23 10:46',
				end: '2017-11-23 10:57'
			}
		],
		crew: [
			{id: 2, position: 'Kirurg'},
			{id: 5, position: 'Assistent 1'}],
		careUnitName: 'KB2',
		operatingDate: '2017-11-23 07:00',
		arrivalTime: '2017-11-23 06:00',
		surgeonTime: 15,
		patientBirthDate: '1987-10-22',
		bloodType: 'AA',
		asa: 2,
		diagnoseTypeFreeText: 'Brukket ben',
		procedureTypeFreeText: 'Fikse det',
		equipment: 'Pinsett',
		tils: 'A',
		priority: 1,
		messageFromBedWard: '',
		medicalInformation: 'Bruker ingen medisin\r\nregelmessig\r\n',
		fasting: 'Etter frokost kl 9',
		position: 'Ryggleie',
		anesthesiaCode: 'Nark',
		noAnesthesia: false,
		trauma: false,
		thrombosisProphylaxis: true,
		isContaminationDanger: false,
		intensiveRoom: false,
		abProphylaxis: false,
		surveillance: false,
		anesthesiaInformation: 'Hypertensjon, ellers stort sett frisk. \nOperert venstre hoft. Tannprotese. \nNakke gap uten annmerkning. Ingen allergier. Cor/pulmo ua.',
		anesthesiaCodeComment: 'Anestesi etter kl 16',
		premedication: 'Paracet 1,5g. Dexametason 12 mg',
		propolDate: '2018-08-03',
		isScreeningCompleted: true,
		needsEpiduralAnesthetic: false,
		needsArterialCatheter: false,
		needsCentralVenousCatheter: true,
		height: 145,
		weight: 57,
		otherInformation: 'Ingen anestesi før kl 16',
		socialSecurityNum: '22108749192'
	}
]


export const planningPhases = [
	{
		id: 0,
		name: 'pretime',
		color: '#F9F9EE'
	},
	{
		id: 1,
		name: 'knifetime',
		color: '#DAD9C0'
	},
	{
		id: 2,
		name: 'posttime',
		color: '#F9F9EE'
	},
]

export const actualPhases = [
	{
		id: 0,
		name: 'forberedelse',
		color: '#C6E0FF'
	},
	{
		id: 1,
		name: 'pretid',
		color: '#9CCE63'
	},
	{
		id: 2,
		name: 'knivtid',
		color: '#6B8E23'
	},
	{
		id: 3,
		name: 'posttid',
		color: '#316300'
	},
	{
		id: 4,
		name: 'postop',
		color: '#C6E0FF'
	}
]

export default operations