import SubjectInput from "../SubjectInput";


const NetsatForm = () => {
    return (<form
        id="input-form"
        className="text-sm pt-3 pb-9 m-auto text-center"
      >
        <p className="text-xl text-text_primary mt-5">ความฉลาดรู้ทั่วไป</p>
        <SubjectInput title="ภาษาไทย" id="thai" />
        <SubjectInput title="ภาษาอังกฤษ" id="eng" />
        <SubjectInput title="คณิตศาสตร์" id="math" />
        <p className="text-xl text-text_primary mt-5">ความฉลาดรู้เฉพาะ</p>
        <SubjectInput title="วิทยาศาสตร์และเทคโนโลยี" id="sci" />
        <SubjectInput title="เคมี" id="chem" />
        <SubjectInput title="ชีววิทยา" id="bio" />
        <SubjectInput title="ฟิสิกส์" id="phy" />
      </form>)
}
const CapabilityForm = () => {
  return (<form
    id="capacity-form"
    className="text-secondary text-sm pt-3 pb-9 m-auto text-center border-b-2 hidden"
  >
    <p className="text-xl text-text_primary mt-5">สมรรถนะเฉพาะด้าน</p>
    <SubjectInput title="ภาษาต่างประเทศ" id="foreign" />
    <SubjectInput title="ศิลปกรรมศาสตร์" id="fiart" />
    <SubjectInput title="วิศวกรรมศาสตร์" id="engi" />
    <SubjectInput title="ศึกษาศาสตร์" id="edu" />
    <SubjectInput title="เวชนิทัศน์" id="med" />
  </form>)
}
export {NetsatForm, CapabilityForm}