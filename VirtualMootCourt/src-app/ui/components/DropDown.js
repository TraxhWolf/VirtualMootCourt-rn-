import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"

export function ProblemDropDown({label, onSelectItem}) {
    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                marginBottom: 5,
                fontSize: 16
            },
            selectStyle: {
                height: 60,
                width: 300,
                borderRadius: 10
            }
        }
    )

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState(
        [
            {label: 'Civil', value: 'civil'},
            {label: 'Criminal', value: 'criminal'}
        ]
    )

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select category"
            style={styles.selectStyle}
            onSelectItem={onSelectItem}
             />
        </View>
    )
}

export function DaysDropDown({label, onSelectItem}) {
    const styles = StyleSheet.create(
        { 
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                marginBottom: 5,
                fontSize: 16
            },
            selectStyle: {
                height: 60,
                width: 300,
                borderRadius: 10
            }
        }
    )

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState(
        [
            {label: '30 days', value: '30'},
            {label: '45 days', value: '45'},
            {label: '60 days', value: '60'}
        ]
    )
    const handleValueChange = (selectedValue) => {
        setValue(selectedValue);
        onSelectItem(selectedValue);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select no. of days"
            style={styles.selectStyle}
            onSelectItem={onSelectItem}
            onChangeValue={handleValueChange}
             />
        </View>
    )
}