// 투구 폼별 데이터 정의
const mechanismData = {
    overhand: {
        name: "오버핸드 (Overhand)",
        gif: "assets/animations/overhand_form.gif",
        angle: "지면 기준 70~90도",
        release: "매우 높음. 타자 시야의 가장 높은 곳에서 공이 나옴.",
        pros: "수직 무브먼트(상하 낙폭)를 극대화하기 좋으며, 커브나 포크볼 구사에 유리함.",
        cons: "어깨와 팔꿈치에 걸리는 부하가 커 부상 위험이 상대적으로 높음."
    },
    threeQuarter: {
        name: "스리쿼터 (Three-quarter)",
        gif: "assets/animations/threequarter_form.gif",
        angle: "지면 기준 45~70도",
        release: "중상단. 오버핸드와 사이드암의 중간 지점.",
        pros: "구속과 제구력의 밸런스가 가장 좋으며, 부상 위험이 비교적 적음. 현대 야구의 가장 대중적인 폼.",
        cons: "특이점이 적어 릴리스 포인트만으로 타자의 타이밍을 뺏기는 어려움."
    },
    sidearm: {
        name: "사이드암 (Sidearm)",
        gif: "assets/animations/sidearm_form.gif",
        angle: "지면 기준 0~30도",
        release: "허리 높이. 공이 옆에서 나오며 횡무브먼트가 강함.",
        pros: "우투수 기준 우타자 몸쪽으로 파고드는 궤적이 위협적임. 슬라이더, 싱커 구사에 최적화.",
        cons: "좌타자 상대로 약점을 보일 확률이 높음 (플래툰 약점)."
    },
    underhand: {
        name: "언더핸드 (Underhand)",
        gif: "assets/animations/underhand_form.gif",
        angle: "지면 기준 0도 미만 (밑에서 위로)",
        release: "무릎 이하 높이. 땅에 닿을 듯한 낮은 타점.",
        pros: "희귀성이 매우 높아 타자들의 타이밍을 뺏기 좋고, 공이 떠오르는 듯한 무브먼트(업슛) 생성 가능.",
        cons: "구속을 끌어올리기 매우 어려우며, 도루 허용률이 높을 수 있음."
    }
};

// 버튼 클릭 시 화면 업데이트 함수
function updateMechanism(formType) {
    const data = mechanismData[formType];

    // 1. 텍스트 및 데이터 업데이트
    document.getElementById("form-name").textContent = data.name;
    document.getElementById("arm-angle").textContent = data.angle;
    document.getElementById("release-point").textContent = data.release;
    document.getElementById("form-pros").textContent = data.pros;
    document.getElementById("form-cons").textContent = data.cons;

    // 2. 이미지(GIF) 업데이트
    document.getElementById("form-gif").src = data.gif;

    // 3. 버튼 활성화 상태 표시 (CSS 연동)
    const buttons = document.querySelectorAll(".form-selector button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}