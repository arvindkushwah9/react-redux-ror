class Patient < ApplicationRecord

  def self.import(file)
    require 'csv'
    CSV.foreach(file.path, headers: false).each_with_index do |row, index|
      unless index == 0
        patient = Patient.find_or_initialize_by(name: row[0])
        begin
          row_date = row[1].split('/')
          row_date_year = "19#{row_date[2]}"
          row_date[2] = row_date_year
          row_final_date = row_date.join("/")
          patient.date  =  row_final_date
        rescue
        end
        patient.number  =  row[2]
        patient.description  =  row[3]    
        patient.save 
      end
    end
    return Patient.all
  end
end
