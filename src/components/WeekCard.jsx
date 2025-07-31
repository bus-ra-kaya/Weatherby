export default function WeekCard ({day,highest,lowest,img}) {
    return (
        <section className=""> 
        <div>
            {day}
        </div>
        <img src={img} alt="" />
        <div>{highest}° / {lowest} °</div>
        </section>
    )
}