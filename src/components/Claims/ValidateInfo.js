
export default function validateInfo(claims){
    let errors = {};    
    if (!claims.claim_no) {
        errors.claim_no = "claim Number is Required";
    } else if (!/^[0-9]{9}$/.test(claims.claim_no)) {        
        errors.claim_no = "Invalid Claim No";
    }
    if (!claims.claim_type) {
        errors.claim_type = "claim Type  is Required";
    }
    if (!claims.claim_program) {
        errors.claim_program = "claim programs is Required";
    }  else if(!/^[A-Za-z]+$/.test(claims.claim_program)) {
        errors.claim_program = "claim program should be in alphabets";
    }
    if (!claims.start_date) {
        errors.start_date = "claim start Date is Required";
    }
    if (!claims.end_date) {
        errors.end_date = "claim End Date is Required";
    }
    
    return errors;

}