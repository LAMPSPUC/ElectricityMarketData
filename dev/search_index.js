var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ElectricityMarketData","category":"page"},{"location":"#ElectricityMarketData","page":"Home","title":"ElectricityMarketData","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ElectricityMarketData.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ElectricityMarketData]","category":"page"},{"location":"#ElectricityMarketData.ElectricityMarket","page":"Home","title":"ElectricityMarketData.ElectricityMarket","text":"ElectricityMarket\n\nAbstract type representing an electricity market.\n\n\n\n\n\n","category":"type"},{"location":"#TimeZones.ZonedDateTime-Tuple{Dates.DateTime, ElectricityMarket}","page":"Home","title":"TimeZones.ZonedDateTime","text":"ZonedDateTime(date::DateTime, timezone::TimeZone) :: ZonedDateTime\n\nReturn a ZonedDateTime object with the given date and timezone from the market.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData._async_download","page":"Home","title":"ElectricityMarketData._async_download","text":"_async_download(url::AbstractString, filename::AbstractString, headers::Dict)::Task\n\nDownloads the 'url' and saves it to 'filename' asynchronously. Return the tasks.\n\n\n\n\n\n","category":"function"},{"location":"#ElectricityMarketData._async_download-Union{Tuple{T}, Tuple{Vector{T}, Vector{T}, AbstractString, AbstractString}} where T<:AbstractString","page":"Home","title":"ElectricityMarketData._async_download","text":"function _async_download(urls::Vector{T}, filenames::Vector{T}, url_zip::AbstractString, filename_zip::AbstractString, headers::Dict)::Vector{Task} where T <: AbstractString\n\nDownloads the 'urls' and saves it to 'filenames' asynchronously. If the file is not available, uses the zipped version. Return the tasks.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData._async_get_raw_data","page":"Home","title":"ElectricityMarketData._async_get_raw_data","text":"_async_get_raw_data(\n    market::PjmMarket,\n    start_date::ZonedDateTime,\n    end_date::ZonedDateTime,\n    directory::AbstractString,\n    access_key_dict::Dict{String, String},\n    url_function::Function,\n    series_name::String,\n    download::Bool = true,\n)::Vector{Task}\n\nDownload raw data for Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\nArguments\n\nmarket::PjmMarket: The market object.\nstart_date::ZonedDateTime: The start date of the data to be retrieved.\nend_date::ZonedDateTime: The end date of the data to be retrieved.\ndirectory::AbstractString: The directory where the data will be saved.\naccesskeydict::Dict{String, String}: The access key dictionary.\nurl_function::Function: The function to get the url for the data.\nseries_name::String: The name of the series.\ndownload::Bool: If true, download the data. If false, read the data.\n\nReturns\n\nVector{Task}: The tasks to download the data.\n\n\n\n\n\n","category":"function"},{"location":"#ElectricityMarketData._async_get_raw_data-Tuple{ElectricityMarketData.MisoMarket, AbstractString, AbstractString, AbstractString, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData._async_get_raw_data","text":"_async_get_raw_data(market::MisoMarket, url_folder::AbstractString, file_base::AbstractString, extension::AbstractString, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload the 'filebase' raw data for the given market in the given 'urlfolder' and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData._download","page":"Home","title":"ElectricityMarketData._download","text":"_download(url::AbstractString, filename::AbstractString)::AbstractString\n\nDownloads the return of url if the file filename does not exist, and saves it in filename.\n\n\n\n\n\n","category":"function"},{"location":"#ElectricityMarketData._get_data-Tuple{ElectricityMarketData.MisoMarket, AbstractString, AbstractString, AbstractString, AbstractString, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData._get_data","text":"_get_data(market::MisoMarket, url_folder::AbstractString, file_base::AbstractString, extension::AbstractString, type::AbstractString, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Real-Time (RT) Locational Marginal Price (LMP) data for the given market and start_date to end_date. If the data is not available, download it and save it in folder. \n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData._get_raw_data","page":"Home","title":"ElectricityMarketData._get_raw_data","text":"_get_raw_data(market::PjmMarket, start_date::ZonedDateTime, end_date::ZonedDateTime, directory::AbstractString, access_key_dict::Dict{String, String}, url_function::Function, series_name::String)::Nothing\n\nDownload raw data for Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\nArguments\n\nmarket::PjmMarket: The market object.\nstart_date::ZonedDateTime: The start date of the data to be retrieved.\nend_date::ZonedDateTime: The end date of the data to be retrieved.\ndirectory::AbstractString: The directory where the data will be saved.\naccesskeydict::Dict{String, String}: The access key dictionary.\nurl_function::Function: The function to get the url for the data.\nseries_name::String: The name of the series.\ndownload::Bool: If true, download the data. If false, read the data.\n\nReturns\n\nVector{Task}: The tasks to download the data.\n\n\n\n\n\n","category":"function"},{"location":"#ElectricityMarketData._get_raw_data-Tuple{ElectricityMarketData.MisoMarket, AbstractString, AbstractString, AbstractString, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData._get_raw_data","text":"_get_raw_data(market::MisoMarket, url_folder::AbstractString, file_base::AbstractString, extension::AbstractString, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Real-Time (RT) Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.available_time_series-Tuple{ElectricityMarketData.MisoMarket}","page":"Home","title":"ElectricityMarketData.available_time_series","text":"available_time_series(::MisoMarket) :: Vector{NamedTuple}\n\nReturn Vector of NamedTuple of available time series for the given market.\n\nEx:\n\n[\n    (name=\"RT-load\", unit=\"MW\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_load_data, description=\"Real-time load data\"),\n    (name=\"RT-LMP\", unit=\"MWh\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_lmp, description=\"Real-time Locational Marginal Price data\"),\n]\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.available_time_series-Tuple{ElectricityMarketData.PjmMarket}","page":"Home","title":"ElectricityMarketData.available_time_series","text":"available_time_series(::PjmMarket) :: Vector{NamedTuple}\n\nReturn Vector of NamedTuple of available time series for the given market.\n\nEx:\n\n[\n    (name=\"RT-load\", unit=\"MW\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_load_data, description=\"Real-time load data\"),\n    (name=\"RT-LMP\", unit=\"MWh\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_lmp, description=\"Real-time Locational Marginal Price data\"),\n]\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.available_time_series-Tuple{ElectricityMarket}","page":"Home","title":"ElectricityMarketData.available_time_series","text":"available_time_series(market::ElectricityMarket) :: Vector{NamedTuple}\n\nReturn Vector of NamedTuple of available time series for the given market.\n\nEx:\n\n[\n    (name=\"RT-load\", unit=\"MW\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_load_data, description=\"Real-time load data\"),\n    (name=\"RT-LMP\", unit=\"MWh\", resolution=Hour(1), first_date=DateTime(\"2021-01-01T00:00:00\"), method=get_real_time_lmp, description=\"Real-time Locational Marginal Price data\"),\n]\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_acess_key_headers-Tuple{}","page":"Home","title":"ElectricityMarketData.get_acess_key_headers","text":"get_acess_key_headers()::Dict\n\nGet the access key headers from the PJM API.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_dates-Tuple{ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_dates","text":"get_dates(start_date::ZonedDateTime, end_date::ZonedDateTime)::Tuple{Vector{ZonedDateTime}, Vector{ZonedDateTime}}\n\nGet the start and end date for each day in the range.\n\nArguments\n\nstart_date::ZonedDateTime: The start date of the data to be retrieved.\nend_date::ZonedDateTime: The end date of the data to be retrieved.\n\nReturns\n\ndates::Vector{Tuple{ZonedDateTime, ZonedDateTime}}: The start and end date for each month in the range.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_day_ahead_lmp-Tuple{ElectricityMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_day_ahead_lmp","text":"get_day_ahead_lmp(market::ElectricityMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Day-Ahead (DA) Locational Marginal Price (LMP) data for the given market and start_date to end_date. If the data is not available, download it and save it in folder. \n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_day_ahead_lmp-Tuple{ElectricityMarketData.MisoMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_day_ahead_lmp","text":"get_day_ahead_lmp(market::MisoMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Day-Ahead (DA) Locational Marginal Price (LMP) data for the given market and start_date to end_date. If the data is not available, download it and save it in folder. \n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_day_ahead_lmp-Tuple{ElectricityMarketData.PjmMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_day_ahead_lmp","text":"get_day_ahead_lmp(market::PjmMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Day-Ahead (DA) Locational Marginal Price (LMP) data for the given market and start_date to end_date, download is chosen, save it in folder instead.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_day_ahead_lmp_raw_data-Tuple{ElectricityMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_day_ahead_lmp_raw_data","text":"get_day_ahead_lmp_raw_data(market::ElectricityMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Day-Ahead (DA) Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_day_ahead_lmp_raw_data-Tuple{ElectricityMarketData.MisoMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_day_ahead_lmp_raw_data","text":"get_day_ahead_lmp_raw_data(market::MisoMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Day-Ahead (DA) Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_group_df-Tuple{DataFrames.DataFrame, Vector{String}}","page":"Home","title":"ElectricityMarketData.get_group_df","text":"get_group_df(df::DataFrame, value_keys::Vector{String})::Dict{String, DataFrame}\n\nGroup the DataFrame by pnode_id and return a Dict of DataFrames for each value key.\n\nArguments\n\ndf::DataFrame: The DataFrame to be grouped.\nvalue_keys::Vector{String}: The keys to be grouped into a Dict of DataFrames.\n\nReturns\n\nDict{String, DataFrame}: A Dict of DataFrames for each value key.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_meta_df-Tuple{DataFrames.DataFrame, Vector{String}}","page":"Home","title":"ElectricityMarketData.get_meta_df","text":"get_meta_dict(df::DataFrame, meta_keys::Vector{String})::DataFrame\n\nGet the meta DataFrame from the DataFrame.\n\nArguments\n\ndf::DataFrame: The DataFrame to get the meta DataFrame from.\nmeta_keys::Vector{String}: The keys to be included in the meta DataFrame.\n\nReturns\n\nDataFrame: The meta DataFrame.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_pjm_lmp_raw_data-Tuple{ElectricityMarketData.PjmMarket, String, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_pjm_lmp_raw_data","text":"get_day_ahead_lmp_raw_data(market::PjmMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Day-Ahead Energy Market locational marginal pricing (LMP) data for all bus locations market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_real_time_lmp-Tuple{ElectricityMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_real_time_lmp","text":"get_real_time_lmp(market::ElectricityMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Real-Time (RT) Locational Marginal Price (LMP) data for the given market and start_date to end_date. If the data is not available, download it and save it in folder. \n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_real_time_lmp-Tuple{ElectricityMarketData.MisoMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_real_time_lmp","text":"get_real_time_lmp(market::MisoMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Real-Time (RT) Locational Marginal Price (LMP) data for the given market and start_date to end_date. If the data is not available, download it and save it in folder. \n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_real_time_lmp-Tuple{ElectricityMarketData.PjmMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_real_time_lmp","text":"get_real_time_lmp(market::PjmMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir()) :: Tables.table\n\nReturn a table with Real-Time (RT) Locational Marginal Price (LMP) data for the given market and start_date to end_date, download is chosen, save it in folder instead.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_real_time_lmp_raw_data-Tuple{ElectricityMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_real_time_lmp_raw_data","text":"get_real_time_lmp_raw_data(market::ElectricityMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Real-Time (RT) Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_real_time_lmp_raw_data-Tuple{ElectricityMarketData.MisoMarket, ZonedDateTime, ZonedDateTime}","page":"Home","title":"ElectricityMarketData.get_real_time_lmp_raw_data","text":"get_real_time_lmp_raw_data(market::MisoMarket, start_date::ZonedDateTime, end_date::ZonedDateTime; folder::AbstractString=tempdir())\n\nDownload raw data for Real-Time (RT) Locational Marginal Price (LMP) for the given market and start_date to end_date and save it in folder.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_str_dates-Tuple{ZonedDateTime, ZonedDateTime, ElectricityMarketData.PjmMarket}","page":"Home","title":"ElectricityMarketData.get_str_dates","text":"get_str_dates(start_date::ZonedDateTime, end_date::ZonedDateTime, market::PjmMarket)::Tuple{String, String, String, String}\n\nGet the start and end date strings in the format \"m/d/yyyy\" and the start and end hour and minute strings in the format \"HH:MM\".\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_str_dates_file_name-Tuple{ZonedDateTime, ZonedDateTime, ElectricityMarketData.PjmMarket}","page":"Home","title":"ElectricityMarketData.get_str_dates_file_name","text":"get_str_dates_file_name(start_date::ZonedDateTime, end_date::ZonedDateTime)::String\n\nGet the start and end date strings in the format \"m-d-yyyy HH:MM\" for the file name.\n\nArguments\n\nstart_date::ZonedDateTime: The start date of the data to be retrieved.\nend_date::ZonedDateTime: The end date of the data to be retrieved.\nmarket::PjmMarket: The market object.\n\nReturns\n\nString: The start and end date strings in the format \"m-d-yyyy HH:MM\" for the file name.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_timezone-Tuple{ElectricityMarketData.MisoMarket}","page":"Home","title":"ElectricityMarketData.get_timezone","text":"get_timezone(market::MisoMarket) :: TimeZone\n\nReturn the timezone of the given market.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_timezone-Tuple{ElectricityMarketData.PjmMarket}","page":"Home","title":"ElectricityMarketData.get_timezone","text":"get_timezone(market::PjmMarket) :: TimeZone\n\nReturn the timezone of the given market.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_timezone-Tuple{ElectricityMarket}","page":"Home","title":"ElectricityMarketData.get_timezone","text":"get_timezone(market::ElectricityMarket) :: TimeZone\n\nReturn the timezone of the given market.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_url_day_ahead_lmp-NTuple{4, String}","page":"Home","title":"ElectricityMarketData.get_url_day_ahead_lmp","text":"get_url_day_ahead_lmp(start_date::String, end_date::String)::AbstractString\n\nGet the url for the day ahead hourly lmp data from the PJM API.\n\nArguments\n\nstart_date::String: The start date of the data to be retrieved.\nend_date::String: The end date of the data to be retrieved.\nstarthourminute::String: The start hour and minute of the data to be retrieved.\nendhourminute::String: The end hour and minute of the data to be retrieved.\n\nReturns\n\nAbstractString: The url for the day ahead hourly lmp data from the PJM API.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_url_function-Tuple{ElectricityMarketData.PjmMarket, String}","page":"Home","title":"ElectricityMarketData.get_url_function","text":"get_url_function(market::PjmMarket, series_name::String)::Function\n\nGet the url function for the series name.\n\nArguments\n\nmarket::PjmMarket: The market object.\nseries_name::String: The name of the series.\n\nReturns\n\nFunction: The url function for the series name.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.get_url_real_time_lmp-NTuple{4, String}","page":"Home","title":"ElectricityMarketData.get_url_real_time_lmp","text":"get_url_real_time_lmp(start_date::String, end_date::String)::AbstractString\n\nGet the url for the real time hourly lmp data from the PJM API.\n\nArguments\n\nstart_date::String: The start date of the data to be retrieved.\nend_date::String: The end date of the data to be retrieved.\nstarthourminute::String: The start hour and minute of the data to be retrieved.\nendhourminute::String: The end hour and minute of the data to be retrieved.\n\nReturns\n\nAbstractString: The url for the real time hourly lmp data from the PJM API.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.list_markets-Tuple{}","page":"Home","title":"ElectricityMarketData.list_markets","text":"list_markets() :: Vector{ElectricityMarket}\n\nReturn a vector of all available electricity markets.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.parse_df_format-Tuple{DataFrames.DataFrame, Vector{String}, Vector{String}}","page":"Home","title":"ElectricityMarketData.parse_df_format","text":"parsedfformat(df::DataFrame, valuekeys::Vector{String}, metakeys::Vector{String})::Tuple{Dict, DataFrame}\n\nparse the DataFrame into a Dict of DataFrames for each value key and a DataFrame for the meta keys.\n\nArguments\n\ndf::DataFrame: The DataFrame to be parsed.\nvalue_keys::Vector{String}: The keys to be parsed into a Dict of DataFrames.\nmeta_keys::Vector{String}: The keys to be parsed into a DataFrame.\n\nReturns\n\nTuple{Dict, DataFrame}: A Tuple containing the Dict of DataFrames for each value key and a DataFrame for the meta keys.\n\n\n\n\n\n","category":"method"},{"location":"#ElectricityMarketData.read_url-Tuple{AbstractString, Dict}","page":"Home","title":"ElectricityMarketData.read_url","text":"read_url(url::AbstractString, access_key_dict::Dict)::DataFrame\n\nRead the data from the url.\n\nArguments\n\nurl::AbstractString: The url to read the data from.\naccesskeydict::Dict: The access key dictionary.\n\nReturns\n\nDataFrame: The data read from the url.\n\n\n\n\n\n","category":"method"}]
}
