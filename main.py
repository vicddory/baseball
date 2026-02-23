import streamlit as st
from pitcher_view import render_pitcher
# from batter_view import render_batter # 추후 구현 시 주석 해제

# 페이지 설정 (와이드 모드)
st.set_page_config(page_title="Baseball Data Visualizer", layout="wide")

# CSS 커스텀 (폰트, 배경색 등 깔끔한 디자인용)
st.markdown("""
    <style>
    .main { background-color: #f5f7f9; }
    .stTabs [data-baseweb="tab-list"] { gap: 24px; }
    .stTabs [data-baseweb="tab"] { height: 50px; white-space: pre-wrap; background-color: #ffffff; border-radius: 5px; }
    </style>
    """, unsafe_allow_html=True)

def main():
    st.sidebar.title("⚾ 야구 시각화 프로젝트")
    menu = st.sidebar.selectbox("카테고리 선택", ["투수 리포트", "타자 리포트"])

    if menu == "투수 리포트":
        render_pitcher()
    else:
        st.title("타자 리포트")
        st.info("타자 데이터 시각화는 현재 준비 중입니다.")

if __name__ == "__main__":
    main()