import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EvaluationDialog from './EvaluationDialog';
import { Tooltip } from '@mui/material';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import BackupIcon from '@mui/icons-material/Backup';
import { submit_save_Assessment } from '../verifyUser';
import ButtonSave from './ButtonSave';
import ButtonSubmit from './ButtonSubmit';


export default function EvalutationControl({ membersAssessment }) {

    console.log(membersAssessment)
    console.log(window.assessment && window.assessment.submit)
    const [hasSubmit, setHasSubmit] = React.useState(window.assessment && window.assessment.submit)

    const handleSubmit = () => {
        window.assessment.submit = true
        console.log('submit')
        console.log(window.assessment)
        submit_assessment()
        setHasSubmit(true)
    }
    return <>
        {/* <ButtonSubmit setHasSubmit={setHasSubmit} disabled={hasSubmit}/>
        <ButtonSave disabled={hasSubmit} />
        <EvaluateMembers membersAssessment={membersAssessment} disabled={hasSubmit} /> */}
    </>
}

// function EvaluateMembers({ membersAssessment, disabled = false }) {

//     console.log(membersAssessment)
//     const members = Object.keys(membersAssessment)
//     console.log(members)
//     const memberGroupEvalutation = <>{
//         members.map((m, i) => {
//             return <EvaluateMember member={m} key={i} />
//         })
//     }</>;

//     return (
//         <EvaluationDialog >
//             <FormControl disabled={disabled}>
//                 {memberGroupEvalutation}
//             </FormControl>
//         </EvaluationDialog>

//     );
// }

// function EvaluateMember({ member }) {

//     const memberRadioGroup = <MemberRadioGroup member={member} />

//     return <>
//         <FormLabel id={member}>{member}</FormLabel>
//         {memberRadioGroup}
//     </>
// }

// function MemberRadioGroup({ member }) {

//     const [grade, setGrade] = React.useState(window.assessment.members[member]);

//     const handleChange = (e, v) => {
//         window.assessment.members[member] = v
//         setGrade(v)
//     }

//     const arr = Array.from({ length: 6 }, (_, index) => index);
//     const rateGroup = arr.map((value, k) => {
//         return <RateRadio value={value} key={k} />
//     });
//     return <>
//         <RadioGroup
//             row
//             aria-labelledby={member}
//             name="position"
//             defaultValue="top"
//             value={grade}
//             onChange={handleChange}
//         >
//             {rateGroup}
//         </RadioGroup>


//     </>
// }

// function RateRadio({ value }) {

//     return <>
//         <FormControlLabel
//             value={"" + value}
//             control={<Radio />}
//             label={"" + value}
//             labelPlacement="top"
//         />
//     </>
// }

// function ButtonSave2({disabled}) {
//     return <>
//         <Tooltip title="儲存">
//             <Button color="inherit" onClick={() => { save_assessment() }} disabled={disabled}><SaveIcon /></Button>
//         </Tooltip>

//     </>
// }

// function ButtonSubmit2({ onClick, disabled }) {
//     return <>
//         <Tooltip title="送出成績">
//             <Button color="inherit" onClick={onClick} disabled = {disabled}><BackupIcon /></Button>
//         </Tooltip>

//     </>
// }
// function save_assessment() {
//     console.log(
//         {accessToken: window.accessToken,
//         assessment: window.assessment}
//     )
//     submit_save_Assessment(window.accessToken, window.assessment)
// }
function submit_assessment(){
    submit_save_Assessment(window.accessToken, window.assessment, true)
}