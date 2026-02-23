// 페이지를 동적으로 불러오는 핵심 함수 (Fetch API 사용)
function loadPage(pageName) {
    // 1. 클릭한 메뉴 활성화(붉은색 하이라이트) 처리
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active')); // 기존 활성화 제거
    
    // 클릭된 요소에만 'active' 클래스 추가
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 2. 해당 HTML 파일을 서버(또는 로컬)에서 가져와서 화면에 뿌림
    fetch(`pages/${pageName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('페이지를 불러오는 데 실패했습니다.');
            }
            return response.text();
        })
        .then(html => {
            // 가져온 HTML 내용을 content-area 영역에 삽입
            document.getElementById('content-area').innerHTML = html;
        })
        .catch(error => {
            // 에러 발생 시 KT 위즈 붉은색(#e74c3c)으로 에러 메시지 출력
            document.getElementById('content-area').innerHTML = `
                <div style="text-align:center; padding: 50px;">
                    <h2 style="color: #e74c3c;">앗, 화면을 불러올 수 없습니다! ⚾</h2>
                    <p>파일 경로를 다시 확인해 주세요. (${error.message})</p>
                </div>
            `;
        });
}