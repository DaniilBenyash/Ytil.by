import Title from "./Title"

const Price = () => {
    return (
        <div className="price">
            <div className="price__title">
                <Title 
                greenText="Цены"
                text="на вывоз мусора"
                />
            </div>
            <table className="price__table">
                <tbody>
                    <tr className="price__table_title">
                        <th colSpan={2}>Авто (без грузчиков)</th>
                    </tr>
                    <tr className="price__table_thead">
                        <th>Объем</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>до 1 т. / 3 м<sup>3</sup></td>
                        <td>от 60 р.</td>
                    </tr>
                    <tr>
                        <td>до 2 т. / 6 м<sup>3</sup></td>
                        <td>от 90 р.</td>
                    </tr>
                    <tr>
                        <td>до 3 т. / 9 - 10 м<sup>3</sup></td>
                        <td>от 120 р.</td>
                    </tr>
                    <tr>
                        <td>до 4 - 5 т. / 15 м<sup>3</sup></td>
                        <td>от 160 р.</td>
                    </tr>
                    <tr>
                        <td>до 5 т. / 20 м<sup>3</sup></td>
                        <td>от 220 р.</td>
                    </tr>
                    <tr className="price__table_title">
                        <th colSpan={2}>1 грузчик</th>
                    </tr>
                    <tr className="price__table_thead">
                        <th>Услуга</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>Выезд</td>
                        <td>от 20 р.</td>
                    </tr>
                    <tr>
                        <td>Мешок (ходка) на лифте</td>
                        <td>0.6 р.</td>
                    </tr>
                    <tr>
                        <td>Мешок (ходка) пешком - 1 этаж</td>
                        <td>0.3 р.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Price