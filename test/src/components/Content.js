import './Content.css'
export const Content = ()=>{
    return(
        <div className="titles">
            
            <div className='subTitle1'>
                <span style={{fontSize:'48px',fontWeight:'normal'}}>Зарабатывайте<br/> больше</span>
                    <div className='linearText'>с WELBEX</div>
                        <span style={{opacity:'0.8'}}>Развиваем и контролируем<br/> продажи за вас</span>

            </div>
<div className='subTitle2'>
<div style={{gridArea: ' span 2 / span 2',fontSize:'18px',fontWeight:'500'}}><div/><span>Вместе с <span className='linearTextSpan'>бесплатной</span><br/><span className='linearTextSpan'>консультацией</span> мы дарим:</span><div/></div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <span style={{fontSize:'18px'}}>Виджеты</span>
    <span style={{fontSize:'16px',opacity:'0.8'}}>30 готовых<br/> решений</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <span style={{fontSize:'18px'}}>Dashboard</span>
<span style={{fontSize:'16px',opacity:'0.8'}}>с показателями<br/> вашего бизнеса</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <span style={{fontSize:'18px'}}>Skype Аудит</span>
    <span style={{fontSize:'16px',opacity:'0.8'}} >отдела продаж<br/> и CRM системы</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <span style={{fontSize:'18px'}}>35 дней</span>
    <span style={{fontSize:'16px',opacity:'0.8'}}>использования<br/> CRM</span>
    </div>
    <div style={{gridArea: ' span 2 / span 2'}}>
         <button className='consultationBtn'>Получить консультацию</button>
    </div>
</div>



        </div>
    )
}