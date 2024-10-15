import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Avatar,
  Card,
  CardBody,
  Select,
  SelectItem,
  Spacer,
  DatePicker,
} from "@nextui-org/react";

export default function App() {
  return (

      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          <div>
            <Input isRequired label="Identification" type="text" />
          </div>
          <div>
            <Select isRequired label="Type Identification">
              <SelectItem key="001">Citizen Id</SelectItem>
              <SelectItem key="002">Passport</SelectItem>
              <SelectItem key="003">Special Permission</SelectItem>
              <SelectItem key="004">Outsider Id</SelectItem>
            </Select>
          </div>

          <div>
            <Input isRequired label="First Name" type="text" />
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          <div>
            <Input label="Second Name" type="text" />
          </div>

          <div>
            <Select label="Country">
              <SelectItem key="001">Colombia</SelectItem>
              <SelectItem key="002">Spain</SelectItem>
              <SelectItem key="003">Peru</SelectItem>
              <SelectItem key="004">Argentina</SelectItem>
            </Select>
          </div>

          <div>
            <Input isRequired label="First LastName" type="text" />
          </div>
          <div>
            <Input label="Second LastName" type="text" />
          </div>
          <div>
            <DatePicker isRequired label="Birth Date" />
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          <div>
            <Select isRequired label="Gender">
              <SelectItem key="M">Male</SelectItem>
              <SelectItem key="F">Female</SelectItem>
            </Select>
          </div>
          <div>
            <Input label="Address" type="text" />
          </div>
          <div>
            <Select label="Civil Status">
              <SelectItem key="001">Single</SelectItem>
              <SelectItem key="002">Married</SelectItem>
            </Select>
          </div>

          <div>
            <Select label="Phone Code">
              <SelectItem
                key="colombia"
                startContent={
                  <Avatar
                    alt="Colombia"
                    className="w-6 h-6"
                    src="https://flagcdn.com/co.svg"
                  />
                }
              >
                Colombia (+57)
              </SelectItem>
              <SelectItem
                key="argentina"
                startContent={
                  <Avatar
                    alt="Argentina"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ar.svg"
                  />
                }
              >
                Argentina (+54)
              </SelectItem>
              <SelectItem
                key="venezuela"
                startContent={
                  <Avatar
                    alt="Venezuela"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ve.svg"
                  />
                }
              >
                Venezuela (+58)
              </SelectItem>
              <SelectItem
                key="brazil"
                startContent={
                  <Avatar
                    alt="Brazil"
                    className="w-6 h-6"
                    src="https://flagcdn.com/br.svg"
                  />
                }
              >
                Brazil (+55)
              </SelectItem>
              <SelectItem
                key="switzerland"
                startContent={
                  <Avatar
                    alt="Switzerland"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ch.svg"
                  />
                }
              >
                Switzerland (+41)
              </SelectItem>
              <SelectItem
                key="germany"
                startContent={
                  <Avatar
                    alt="Germany"
                    className="w-6 h-6"
                    src="https://flagcdn.com/de.svg"
                  />
                }
              >
                Germany (+49)
              </SelectItem>
              <SelectItem
                key="spain"
                startContent={
                  <Avatar
                    alt="Spain"
                    className="w-6 h-6"
                    src="https://flagcdn.com/es.svg"
                  />
                }
              >
                Spain (+34)
              </SelectItem>
              <SelectItem
                key="france"
                startContent={
                  <Avatar
                    alt="France"
                    className="w-6 h-6"
                    src="https://flagcdn.com/fr.svg"
                  />
                }
              >
                France (+33)
              </SelectItem>
              <SelectItem
                key="italy"
                startContent={
                  <Avatar
                    alt="Italy"
                    className="w-6 h-6"
                    src="https://flagcdn.com/it.svg"
                  />
                }
              >
                Italy (+39)
              </SelectItem>
              <SelectItem
                key="mexico"
                startContent={
                  <Avatar
                    alt="Mexico"
                    className="w-6 h-6"
                    src="https://flagcdn.com/mx.svg"
                  />
                }
              >
                Mexico (+52)
              </SelectItem>
            </Select>
          </div>

          <div>
            <Input label="Cellphone" type="text" />
          </div>
          <div>
            <Input label="Weight (Kg)" type="numeric" />
          </div>
          <div>
            <Select label="Blood Group">
              <SelectItem key="001">A</SelectItem>
              <SelectItem key="002">B</SelectItem>
              <SelectItem key="003">AB</SelectItem>
              <SelectItem key="004">O</SelectItem>
            </Select>
          </div>

          <div>
            <Select label="RH">
              <SelectItem key="001">+</SelectItem>
              <SelectItem key="002">-</SelectItem>
            </Select>
          </div>
        </div>
      </form>

  );
}
