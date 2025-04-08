import classNames from "classnames"
import "./Socials.scss"
import Button from "../Button"

const Socials = (props) => {
  const { classNme, links = [] } = props

  return (
    <div className={classNames(classNames, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              href="/"
              targer="_blank"
              mode="black-10"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
