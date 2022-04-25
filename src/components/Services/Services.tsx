import React from 'react';
import s from "components/Services/styles/Services.module.css"
import {ServicesInfo} from 'enum/';

export const Services = () => {
  return (
    <div className={s.servicesWrapper}>
      <div className={s.servicesContainer}>
        <span className={s.servicesTitle}>{ServicesInfo.Title}</span>
        <div className={s.servicesBlock}>
          <div className={s.servicesGraph}>
            <div className={s.serviceItemContainer}>
              <div className={s.serviceItem1}>{ServicesInfo.FirstItemName}</div>
              <div className={s.serviceCount}>{ServicesInfo.FirstItemCount}</div>
            </div>
            <div className={s.serviceItemContainer}>
              <div className={s.serviceItem2}>{ServicesInfo.SecondItemName}</div>
              <div className={s.serviceCount}>{ServicesInfo.SecondItemCount}</div>
            </div>
            <div className={s.serviceItemContainer}>
              <div className={s.serviceItem3}>{ServicesInfo.ThirdItemName}</div>
              <div className={s.serviceCount}>{ServicesInfo.ThirdItemCount}</div>
            </div>
          </div>
          <div className={s.servicesGraphTotal}>
            <span>{ServicesInfo.Total}</span>
            <span>{ServicesInfo.TotalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
